/*
 * MANUAL
 * ======
 * To execute this script, you have to install Node.js (https://nodejs.org/en/download/) first.
 * Then put the `data` of minecraft itself at the same directory of this script.
 * After you execute this sciprt, IDs in block tech tags will be replaced by block general tags and reliable vanilla block tags.
 */

const { join } = require('path').posix
const { readdirSync, readFileSync, lstatSync, writeFileSync } = require('fs')

/**
 * These vanilla block tags are reliable.
 */
const reliable = [
    'minecraft:acacia_logs',
    'minecraft:anvil',
    'minecraft:banners',
    'minecraft:beds',
    'minecraft:birch_logs',
    'minecraft:buttons',
    'minecraft:carpets',
    'minecraft:coral_blocks',
    'minecraft:coral_plants',
    'minecraft:corals',
    'minecraft:dark_oak_logs',
    'minecraft:doors',
    'minecraft:fences',
    'minecraft:flower_pots',
    'minecraft:ice',
    'minecraft:jungle_logs',
    'minecraft:leaves',
    'minecraft:logs',
    'minecraft:oak_logs',
    'minecraft:planks',
    'minecraft:rails',
    'minecraft:sand',
    'minecraft:saplings',
    'minecraft:signs',
    'minecraft:slabs',
    'minecraft:small_flowers',
    'minecraft:spruce_logs',
    'minecraft:stairs',
    'minecraft:standing_signs',
    'minecraft:stone_bricks',
    'minecraft:trapdoors',
    'minecraft:wall_corals',
    'minecraft:wall_signs',
    'minecraft:walls',
    'minecraft:wooden_buttons',
    'minecraft:wooden_fences',
    'minecraft:wooden_doors',
    'minecraft:wooden_pressure_plates',
    'minecraft:wooden_trapdoors',
    'minecraft:wool',
]

// Read all tags.
function getTags(dataPath, type) {
    const namespaces = readdirSync(dataPath)
    let ans = {}

    for (const namespace of namespaces) {
        const namespacePath = join(dataPath, namespace)
        if (lstatSync(namespacePath).isDirectory()) {
            const path = join(namespacePath, `tags/${type}`)
            function getTagsFromDir(dir) {
                const files = readdirSync(join(path, dir)).map(v => join(dir, v))
                let ans = {}
                for (const file of files) {
                    if (lstatSync(join(path, file)).isDirectory()) {
                        ans = { ...ans, ...getTagsFromDir(file) }
                    } else {
                        if (file.slice(-5) !== '.json') {
                            continue
                        }
                        const id = `${namespace}:${file.slice(0, -5)}`
                        ans[id] = JSON.parse(readFileSync(join(path, file), { encoding: 'utf8' }))
                    }
                }
                return ans
            }
            ans = { ...ans, ...getTagsFromDir('') }
        }
    }

    return ans
}
const tags = {
    ...getTags(join(__dirname, 'data'), 'blocks'),
    ...getTags(join(__dirname, '../data'), 'blocks')
}

// Figure out the largest recursion count.
let largestRecursionCount = 0
function getRecursionCount(id) {
    if (!tags[id]) {
        throw id
    }
    const { values } = tags[id]
    let ans = 0
    for (const value of values) {
        if (value[0] === '#') {
            // ans = Math.max(ans, getRecursionCount(value.slice(1)) + 1)
            ans += getRecursionCount(value.slice(1)) + 1
        }
    }
    return ans
}
for (const id in tags) {
    const recursionCount = getRecursionCount(id)
    largestRecursionCount = Math.max(largestRecursionCount, recursionCount)
}

// Loop.
for (let i = 0; i < largestRecursionCount; i++) {
    for (const id in tags) {
        if (id.slice(0, 8) !== 'uin:tech') {
            continue
        }
        const { values } = tags[id]
        for (const value of values) {
            let flag = false
            for (const subID in tags) {
                if (subID === id || (subID.slice(0, 11) !== 'uin:general' && reliable.indexOf(subID) === -1)) {
                    continue
                }
                const { values: subValues } = tags[subID]
                if (subValues.indexOf(value) !== -1) {
                    let subFlag = true
                    for (const subValue of subValues) {
                        if (values.indexOf(subValue) === -1) {
                            subFlag = false
                        }
                    }
                    if (subFlag) {
                        // Replace ids in `values` by `subID`.
                        values.push(`#${subID}`)
                        for (const subValue of subValues) {
                            values.splice(values.indexOf(subValue), 1)
                        }
                        break
                    }
                }
            }
            if (flag) {
                break
            }
        }
        values.sort()
        delete tags[id].replace
    }
}

// Save.
function idToPath(id, type) {
    const namespace = id.slice(0, id.indexOf(':'))
    const dir = id.slice(id.indexOf(':') + 1)
    const ans = `${join(__dirname, '../data')}/${namespace}/tags/${type}/${dir}.json`
    return ans
}
for (const id in tags) {
    if (id.slice(0, 8) === 'uin:tech') {
        const content = JSON.stringify(tags[id], undefined, '	') + '\n'
        writeFileSync(idToPath(id, 'blocks'), content, { encoding: 'utf8' })
    }
}
