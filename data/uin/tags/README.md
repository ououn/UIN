**构建中的数据包版本——v1.15.4.4**

**适用于MC版本——1.16(20w22a ~ 1.16 rc1)**

**稳定版数据包可在releases页面下载。当前页面显示构建中数据包，可直接在主页右上角按clone or download绿色按钮进行下载**

**方块/实体/物品文件夹下各有一份txt格式的包含所有id且不使用任何其他标签的标签文本，可单独使用**

**若以下内容与实际情况有出入，或漏标了几个。请联系我以便即时修正，感谢*

**更新日志**

[其他]
- 标签整理
- 简化更新日志
- 新增方块/物品/实体至对应标签
- 新增方块标签，砂岩 uin:general/sandstones
- 新增方块标签，藤蔓 uin:general/vines
- 新增物品标签，盔甲 uin:general/armors
- 新增物品标签，斧头 uin:general/axes
- 新增物品标签，旗帜图案 uin:general/banner_patterns
- 新增物品标签，靴子 uin:general/boots
- 新增物品标签，胸甲 uin:general/chestplates
- 新增物品标签，染料 uin:general/dye
- 新增物品标签，头盔 uin:general/helmets
- 新增物品标签，锄头 uin:general/hoes
- 新增物品标签，马凯 uin:general/horse_armors
- 新增物品标签，护腿 uin:general/leggings
- 新增物品标签，矿车 uin:general/minecarts
- 新增物品标签，原矿 uin:general/ores
- 新增物品标签，稿子 uin:general/pickaxes
- 新增物品标签，铲子 uin:general/shovels
- 新增物品标签，头颅 uin:general/skulls
- 新增物品标签，剑 uin:general/swords
- 新增物品标签，武器 uin:general/weapons
- 新增实体标签，海洋生物 uin:tech/aquatic
- 新增实体标签，节肢生物 uin:tech/arthropods
- 新增实体标签，弹射物 uin:tech/projectiles
- 雪傀儡归类至实体标签 uin:tech/passive
- 移动方块标签，uin:tech/infested > uin:general/infested
- 移除方块标签，uin:general/pressure_plates，使用minecraft:pressure_plates
- 移除方块标签，uin:general/fence_gates，使用minecraft:fence_gates

# 未来版本/个人备注


- 方块
    - 可能成为方块实体
        - 制箭台(minecraft:fletching_table)

    - 可能成为非方块实体
        - 床(#minecraft:beds)
    - 检查#minecraft:saplings是否会添加bamboo_sapling


- 物品


- 实体
    - 巨人(minecraft:giant)因没有AI，暂归类为passive
    - 铁傀儡，情况特殊，不纳入仇恨类型


***


# TODO
*优先度由上至下，若有其他标签请求可在论坛内[回复/私信本人](https://www.mcbbs.net/?725858)。实用、技术性的标签优先
也可以写完后pull过来，验证过后合并*

*存在部分争议的标签考虑移动到custom下，争议过大的标签将取消制作*

**谢谢各位的支持！**


- 方块
	- 对实体造成伤害
	- (同类方块标签化)
	- 透光方块
	- 非完整方块——铁砧、门、耕地、半砖...
	- 占据两格的方块——如床，大箱子等


- 物品
	- 可右键物品


- 实体
	- 右键互动（不包括喂食）


***


# 已制作

- 方块
    - **general**
        - [chests](https://raw.githubusercontent.com/ououn/UIN/master/data/uin/tags/blocks/general/chests.json)——储物箱
        - [command_blocks](https://raw.githubusercontent.com/ououn/UIN/master/data/uin/tags/blocks/general/command_blocks.json)——命令方块
        - [concrete](https://raw.githubusercontent.com/ououn/UIN/master/data/uin/tags/blocks/general/concrete.json)——混凝土
        - [concrete_powder](https://raw.githubusercontent.com/ououn/UIN/master/data/uin/tags/blocks/general/concrete_powder.json)——混凝土粉末
        - [dead_coral_blocks](https://raw.githubusercontent.com/ououn/UIN/master/data/uin/tags/blocks/general/dead_coral_blocks.json)——失活的珊瑚块
        - [dead_coral_fans](https://raw.githubusercontent.com/ououn/UIN/master/data/uin/tags/blocks/general/dead_coral_fans.json)——失活的珊瑚扇
        - [dead_coral_wall_fans](https://raw.githubusercontent.com/ououn/UIN/master/data/uin/tags/blocks/general/dead_coral_wall_fans.json)——失活的墙上的珊瑚扇
        - [dead_corals](https://raw.githubusercontent.com/ououn/UIN/master/data/uin/tags/blocks/general/dead_corals.json)——失活的珊瑚
        - [ferns](https://raw.githubusercontent.com/ououn/UIN/master/data/uin/tags/blocks/general/ferns.json)——蕨类
        - [furnaces](https://raw.githubusercontent.com/ououn/UIN/master/data/uin/tags/blocks/general/furnaces.json)——烤具
    	- [gases](https://raw.githubusercontent.com/ououn/UIN/master/data/uin/tags/blocks/general/gases.json)——气体
        - [glass_blocks](https://raw.githubusercontent.com/ououn/UIN/master/data/uin/tags/blocks/general/glass_blocks.json)——玻璃
        - [glass_panes](https://raw.githubusercontent.com/ououn/UIN/master/data/uin/tags/blocks/general/glass_panes.json)——玻璃板
    	- [infested](https://raw.githubusercontent.com/ououn/UIN/master/data/uin/tags/blocks/general/infested.json)——被虫蚀的方块
        - [liquid](https://raw.githubusercontent.com/ououn/UIN/master/data/uin/tags/blocks/general/liquid.json)——液体
        - [ores](https://raw.githubusercontent.com/ououn/UIN/master/data/uin/tags/blocks/general/ores.json)——原矿
        - [sandstones](https://raw.githubusercontent.com/ououn/UIN/master/data/uin/tags/blocks/general/sandstones.json)——砂岩
        - [skulls](https://raw.githubusercontent.com/ououn/UIN/master/data/uin/tags/blocks/general/skulls.json)——头颅
        - [terracotta](https://raw.githubusercontent.com/ououn/UIN/master/data/uin/tags/blocks/general/terracotta.json)——陶瓦
        - [terracotta_glazed](https://raw.githubusercontent.com/ououn/UIN/master/data/uin/tags/blocks/general/terracotta_glazed.json)——带釉陶瓦
        - [torches](https://raw.githubusercontent.com/ououn/UIN/master/data/uin/tags/blocks/general/torches.json)——火把、红石火把
        - [vines](https://raw.githubusercontent.com/ououn/UIN/master/data/uin/tags/blocks/general/vines.json)——藤蔓
        - [weighted_pressure_plates](https://raw.githubusercontent.com/ououn/UIN/master/data/uin/tags/blocks/general/weighted_pressure_plates.json)——测重压力板
    - **tech**
    	- [all](https://raw.githubusercontent.com/ououn/UIN/master/data/uin/tags/blocks/tech/all.json)——所有方块
        - [block_entities](https://raw.githubusercontent.com/ououn/UIN/master/data/uin/tags/blocks/tech/block_entities.json)——方块实体
        - [components_mechanism](https://raw.githubusercontent.com/ououn/UIN/master/data/uin/tags/blocks/tech/components_mechanism.json)——机械元件
        - [components_power](https://raw.githubusercontent.com/ououn/UIN/master/data/uin/tags/blocks/tech/components_power.json)——电源元件
        - [components_redstone](https://raw.githubusercontent.com/ououn/UIN/master/data/uin/tags/blocks/tech/components_redstone.json)——红石元件
        - [components_transmission](https://raw.githubusercontent.com/ououn/UIN/master/data/uin/tags/blocks/tech/components_transmission.json)——传输元件
        - [gravity_affected](https://raw.githubusercontent.com/ououn/UIN/master/data/uin/tags/blocks/tech/gravity_affected.json)——重力影响
        - [light_emit](https://raw.githubusercontent.com/ououn/UIN/master/data/uin/tags/blocks/tech/light_emit.json)——光源方块（包括可能成为光源的方块，如熔炉）（flowing_lava不是方块标签，而是流体标签）
        - [redstone_opaque](https://raw.githubusercontent.com/ououn/UIN/master/data/uin/tags/blocks/tech/redstone_opaque.json)——不透明方块，能被红石充能
        - [redstone_transparent](https://raw.githubusercontent.com/ououn/UIN/master/data/uin/tags/blocks/tech/redstone_transparent.json)——透明方块，不能被红石充能
        - [solid_not](https://raw.githubusercontent.com/ououn/UIN/master/data/uin/tags/blocks/tech/solid_not.json)——非固体方块，完全不改变经过实体高度，完全不阻碍实体经过的方块（不包括 minecraft:snow）


- 物品
    - **general**
        - [armors](https://raw.githubusercontent.com/ououn/UIN/master/data/uin/tags/items/general/armors.json)——盔甲
        - [axes](https://raw.githubusercontent.com/ououn/UIN/master/data/uin/tags/items/general/axes.json)——斧子
        - [banner_patterns](https://raw.githubusercontent.com/ououn/UIN/master/data/uin/tags/items/general/banner_patterns.json)——旗帜图案
        - [boots](https://raw.githubusercontent.com/ououn/UIN/master/data/uin/tags/items/general/boots.json)——靴子
        - [chestplates](https://raw.githubusercontent.com/ououn/UIN/master/data/uin/tags/items/general/chestplates.json)——胸甲
        - [dye](https://raw.githubusercontent.com/ououn/UIN/master/data/uin/tags/items/general/dye.json)——染料
        - [fence_gates](https://raw.githubusercontent.com/ououn/UIN/master/data/uin/tags/items/general/fence_gates.json)——栅栏门
        - [helmets](https://raw.githubusercontent.com/ououn/UIN/master/data/uin/tags/items/general/helmets.json)——头盔
        - [hoes](https://raw.githubusercontent.com/ououn/UIN/master/data/uin/tags/items/general/hoes.json)——锄头
        - [horse_armors](https://raw.githubusercontent.com/ououn/UIN/master/data/uin/tags/items/general/horse_armors.json)——马凯
        - [leggings](https://raw.githubusercontent.com/ououn/UIN/master/data/uin/tags/items/general/leggings.json)——护腿
        - [minecarts](https://raw.githubusercontent.com/ououn/UIN/master/data/uin/tags/items/general/minecarts.json)——矿车
        - [ores](https://raw.githubusercontent.com/ououn/UIN/master/data/uin/tags/items/general/ores.json)——原矿
        - [pickaxes](https://raw.githubusercontent.com/ououn/UIN/master/data/uin/tags/items/general/pickaxes.json)——稿子
        - [pressure_plates](https://raw.githubusercontent.com/ououn/UIN/master/data/uin/tags/items/general/pressure_plates.json)——压力板
        - [shovels](https://raw.githubusercontent.com/ououn/UIN/master/data/uin/tags/items/general/shovels.json)——铲子
        - [skulls](https://raw.githubusercontent.com/ououn/UIN/master/data/uin/tags/items/general/skulls.json)——头颅
        - [spawn_eggs](https://raw.githubusercontent.com/ououn/UIN/master/data/uin/tags/items/general/spawn_eggs.json)——刷怪蛋
        - [swords](https://raw.githubusercontent.com/ououn/UIN/master/data/uin/tags/items/general/swords.json)——剑
        - [weapons](https://raw.githubusercontent.com/ououn/UIN/master/data/uin/tags/items/general/weapons.json)——武器
        - [weighted_pressure_plates](https://raw.githubusercontent.com/ououn/UIN/master/data/uin/tags/items/general/weighted_pressure_plates.json)——测重压力板
    - **tech**
        - [all](https://raw.githubusercontent.com/ououn/UIN/master/data/uin/tags/items/tech/all.json)——所有物品


- 实体
    - **general**
        - [minecarts](https://raw.githubusercontent.com/ououn/UIN/master/data/uin/tags/entity_types/general/minecarts.json)——矿车
    - **tech**
        - [ages](https://raw.githubusercontent.com/ououn/UIN/master/data/uin/tags/entity_types/tech/ages.json)——随Age变化而改变形态/碰撞箱大小（不包括药水云、经验球、物品）
        - [all](https://raw.githubusercontent.com/ououn/UIN/master/data/uin/tags/entity_types/tech/all.json)——所有实体
        - [aquatic](https://raw.githubusercontent.com/ououn/UIN/master/data/uin/tags/entity_types/tech/aquatic.json)——海洋生物，受穿刺附魔伤害影响
        - [arthropods](https://raw.githubusercontent.com/ououn/UIN/master/data/uin/tags/entity_types/tech/arthropods.json)——节肢生物，受节肢杀手附魔影响
        - [hostile](https://raw.githubusercontent.com/ououn/UIN/master/data/uin/tags/entity_types/tech/hostile.json)——敌对型生物
        	- 鸡骑士、骷髅骑士、蜘蛛骑士、杀手兔没有单独id，故不在列表内
        - [marker](https://raw.githubusercontent.com/ououn/UIN/master/data/uin/tags/entity_types/tech/marker.json)——盔甲架，药水云
        - [mobs](https://raw.githubusercontent.com/ououn/UIN/master/data/uin/tags/entity_types/tech/mobs.json)——所有生物（不包括玩家）
        - [neutral](https://raw.githubusercontent.com/ououn/UIN/master/data/uin/tags/entity_types/tech/neutral.json)——中立型生物
        - [non_mobs](https://raw.githubusercontent.com/ououn/UIN/master/data/uin/tags/entity_types/tech/non_mobs.json)——所有非生物实体
        - [passive](https://raw.githubusercontent.com/ououn/UIN/master/data/uin/tags/entity_types/tech/passive.json)——被动型生物
        - [projectiles](https://raw.githubusercontent.com/ououn/UIN/master/data/uin/tags/entity_types/tech/projectiles.json)——弹射物
        - [tameable](https://raw.githubusercontent.com/ououn/UIN/master/data/uin/tags/entity_types/tech/tameable.json)——可驯服类型
        - [undead](https://raw.githubusercontent.com/ououn/UIN/master/data/uin/tags/entity_types/tech/undead.json)——不死生物，获得恢复效果时受伤
    - **custom**
        - [graveborn](https://raw.githubusercontent.com/ououn/UIN/master/data/uin/tags/entity_types/custom/graveborn.json)——亡灵类



***
# 特别感谢以下大佬的贡献
- [kongbaiyo](https://www.mcbbs.net/?574210)
- [SPGoding](https://www.mcbbs.net/?2444378)
- [Teenager_Yang](https://www.mcbbs.net/?2337994)
- [CR_19](https://www.mcbbs.net/?2504275)
