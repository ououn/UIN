**构建中的数据包版本——v2.0.0.18**

**适用于MC版本—— 1.16.2 rc1 ~ 1.17 (21w17a)**

**稳定版数据包可在releases页面下载。也可直接在主页右上角按clone or download绿色按钮，下载当前构建中的未发布版本**

**方块/实体/物品文件夹下各有一份txt格式的包含所有id且不使用任何其他标签的标签文本，可单独使用**

**几个all.txt尚未更新，先咕一下**

**若以下内容与实际情况有出入，或漏标了几个。请联系我以便即时修正，感谢*

**更新日志**

[其他]
- 标签整理
- 备注标签内id变动/新增的版本
- 实体标签 ages 更正
- 调整被动型生物，中立型生物，敌对型生物。将包括所有有可能的生物
- 新增临时用标签，仅作业用，里面将存放未归类完成的id
- 新增物品标签，命令方块 uin:general/command_blocks
- 新增物品标签，钓竿 uin:general/rods
- 新增物品标签，药水 uin:general/potions
- 新增物品标签，叠堆1 uin:tech/x_1
- 新增物品标签，叠堆16 uin:tech/x_16
- 新增物品标签，叠堆64 uin:tech/x_64
- 新增物品标签，附魔 uin:tech/ench
- 新增方块标签，深层矿 uin:general/deepslate_ores
- 新增方块标签，杜鹃花丛 uin:general/azaleas
- 新增方块标签，粗矿 uin:general/raw_blocks
- 新增方块标签，存放物品 uin:tech/store_item
- 新增实体标签，灾厄村民 uin:general/illagers
- 新增实体标签，蜘蛛 uin:general/spiders
- 新增实体标签，展示框 uin:general/item_frames
- 新增实体标签文本，所有生物 uin:tech/_mobs.txt
- 新增实体标签文本，所有非生物 uin:tech/_non_mobs.txt

# 未来版本/个人备注


- 方块
	- 可能成为方块实体
		- 制箭台(minecraft:fletching_table)
	- 可能成为非方块实体
		- 床(#minecraft:beds)
	- 检查#minecraft:saplings是否会添加bamboo_sapling
	- blockstate 目前没收录的状态
		- attached,attachment,bites,bottom,charges,conditional,delay,disarmed,drag,eggs,enabled,extended,eye
		- hanging,hatch,hinge,in_wall,instrument,inverted,layers,leaves,locked,mode,moisture,note,occupied
		- part,persistent,pickles,short,signal_fire,unstable


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
	- (同类方块标签化)
	- 拥有任何方块状态的方块
	- 非/常亮方块
	- 透光方块
	- 非完整方块——铁砧、门、耕地、半砖...
	- 占据两格的方块——如床，大箱子等


- 物品
	- (同类物品标签化)
	- 方块
	- 方块实体
	- 不可叠堆-大部分情况（药水瓶，已绘制的地图，成书，等。可能没有？）
	- 作物
	- 可右键物品


- 实体
	- 右键互动（不包括喂食）


***


# 已制作

- 方块
	- **general**
		- [azaleas](https://raw.githubusercontent.com/ououn/UIN/master/data/uin/tags/blocks/general/azaleas.json)——杜鹃花丛
		- [chests](https://raw.githubusercontent.com/ououn/UIN/master/data/uin/tags/blocks/general/chests.json)——储物箱
		- [command_blocks](https://raw.githubusercontent.com/ououn/UIN/master/data/uin/tags/blocks/general/command_blocks.json)——命令方块
		- [concrete](https://raw.githubusercontent.com/ououn/UIN/master/data/uin/tags/blocks/general/concrete.json)——混凝土
		- [concrete_powder](https://raw.githubusercontent.com/ououn/UIN/master/data/uin/tags/blocks/general/concrete_powder.json)——混凝土粉末
		- [dead_coral_blocks](https://raw.githubusercontent.com/ououn/UIN/master/data/uin/tags/blocks/general/dead_coral_blocks.json)——失活的珊瑚块
		- [dead_coral_fans](https://raw.githubusercontent.com/ououn/UIN/master/data/uin/tags/blocks/general/dead_coral_fans.json)——失活的珊瑚扇
		- [dead_coral_wall_fans](https://raw.githubusercontent.com/ououn/UIN/master/data/uin/tags/blocks/general/dead_coral_wall_fans.json)——失活的墙上的珊瑚扇
		- [dead_corals](https://raw.githubusercontent.com/ououn/UIN/master/data/uin/tags/blocks/general/dead_corals.json)——失活的珊瑚
		- [deepslate_ores](https://raw.githubusercontent.com/ououn/UIN/master/data/uin/tags/blocks/general/deepslate_ores.json)——深层矿
		- [ferns](https://raw.githubusercontent.com/ououn/UIN/master/data/uin/tags/blocks/general/ferns.json)——蕨类
		- [fungus](https://raw.githubusercontent.com/ououn/UIN/master/data/uin/tags/blocks/general/fungus.json)——菌类
		- [furnaces](https://raw.githubusercontent.com/ououn/UIN/master/data/uin/tags/blocks/general/furnaces.json)——烤具
		- [gases](https://raw.githubusercontent.com/ououn/UIN/master/data/uin/tags/blocks/general/gases.json)——气体
		- [glass_blocks](https://raw.githubusercontent.com/ououn/UIN/master/data/uin/tags/blocks/general/glass_blocks.json)——玻璃
		- [glass_panes](https://raw.githubusercontent.com/ououn/UIN/master/data/uin/tags/blocks/general/glass_panes.json)——玻璃板
		- [grass](https://raw.githubusercontent.com/ououn/UIN/master/data/uin/tags/blocks/general/grass.json)——草丛
		- [ground_banners](https://raw.githubusercontent.com/ououn/UIN/master/data/uin/tags/blocks/general/ground_banners.json)——置地旗帜
		- [ground_skulls](https://raw.githubusercontent.com/ououn/UIN/master/data/uin/tags/blocks/general/ground_skulls.json)——置地头颅
		- [ground_torches](https://raw.githubusercontent.com/ououn/UIN/master/data/uin/tags/blocks/general/ground_torches.json)——置地火把
		- [infested](https://raw.githubusercontent.com/ououn/UIN/master/data/uin/tags/blocks/general/infested.json)——被虫蚀的方块
		- [lanterns](https://raw.githubusercontent.com/ououn/UIN/master/data/uin/tags/blocks/general/lanterns.json)——灯笼。灯笼和灵魂灯笼
		- [liquid](https://raw.githubusercontent.com/ououn/UIN/master/data/uin/tags/blocks/general/liquid.json)——液体
		- [mineral_blocks](https://raw.githubusercontent.com/ououn/UIN/master/data/uin/tags/blocks/general/mineral_blocks.json)——矿物块
		- [ores](https://raw.githubusercontent.com/ououn/UIN/master/data/uin/tags/blocks/general/ores.json)——原矿
		- [piston](https://raw.githubusercontent.com/ououn/UIN/master/data/uin/tags/blocks/general/piston.json)——活塞与其产物
		- [pumpkin_blocks](https://raw.githubusercontent.com/ououn/UIN/master/data/uin/tags/blocks/general/pumpkin_blocks.json)——南瓜，方块。南瓜，雕刻南瓜，南瓜灯
		- [raw_blocks](https://raw.githubusercontent.com/ououn/UIN/master/data/uin/tags/blocks/general/raw_blocks.json)——粗犷
		- [roots](https://raw.githubusercontent.com/ououn/UIN/master/data/uin/tags/blocks/general/roots.json)——菌素
		- [sandstones](https://raw.githubusercontent.com/ououn/UIN/master/data/uin/tags/blocks/general/sandstones.json)——砂岩
		- [seagrass](https://raw.githubusercontent.com/ououn/UIN/master/data/uin/tags/blocks/general/seagrass.json)——海草
		- [skulls](https://raw.githubusercontent.com/ououn/UIN/master/data/uin/tags/blocks/general/skulls.json)——头颅
		- [smooth_stone](https://raw.githubusercontent.com/ououn/UIN/master/data/uin/tags/blocks/general/smooth_stone.json)——平滑石类
		- [sponge](https://raw.githubusercontent.com/ououn/UIN/master/data/uin/tags/blocks/general/sponge.json)——海绵
		- [terracotta](https://raw.githubusercontent.com/ououn/UIN/master/data/uin/tags/blocks/general/terracotta.json)——陶瓦
		- [terracotta_glazed](https://raw.githubusercontent.com/ououn/UIN/master/data/uin/tags/blocks/general/terracotta_glazed.json)——带釉陶瓦
		- [torches](https://raw.githubusercontent.com/ououn/UIN/master/data/uin/tags/blocks/general/torches.json)——火把、红石火把
		- [vines](https://raw.githubusercontent.com/ououn/UIN/master/data/uin/tags/blocks/general/vines.json)——藤蔓
		- [wall_banners](https://raw.githubusercontent.com/ououn/UIN/master/data/uin/tags/blocks/general/wall_banners.json)——贴墙旗帜
		- [wall_skulls](https://raw.githubusercontent.com/ououn/UIN/master/data/uin/tags/blocks/general/wall_skulls.json)——墙上头颅
		- [wall_torches](https://raw.githubusercontent.com/ououn/UIN/master/data/uin/tags/blocks/general/wall_torches.json)——贴墙火把
		- [weighted_pressure_plates](https://raw.githubusercontent.com/ououn/UIN/master/data/uin/tags/blocks/general/weighted_pressure_plates.json)——测重压力板
	- **tech**
		- [all](https://raw.githubusercontent.com/ououn/UIN/master/data/uin/tags/blocks/tech/all.json)——所有方块
		- [block_entities](https://raw.githubusercontent.com/ououn/UIN/master/data/uin/tags/blocks/tech/block_entities.json)——方块实体
		- [components_mechanism](https://raw.githubusercontent.com/ououn/UIN/master/data/uin/tags/blocks/tech/components_mechanism.json)——机械元件
		- [components_power](https://raw.githubusercontent.com/ououn/UIN/master/data/uin/tags/blocks/tech/components_power.json)——电源元件
		- [components_redstone](https://raw.githubusercontent.com/ououn/UIN/master/data/uin/tags/blocks/tech/components_redstone.json)——红石元件
		- [components_transmission](https://raw.githubusercontent.com/ououn/UIN/master/data/uin/tags/blocks/tech/components_transmission.json)——传输元件
		- [damage](https://raw.githubusercontent.com/ououn/UIN/master/data/uin/tags/blocks/tech/damage.json)——能造成伤害的方块（#campfires和sweet_berry_bush视方块状态而定，wither_rose则通过药水效果达成）
		- [gravity_affected](https://raw.githubusercontent.com/ououn/UIN/master/data/uin/tags/blocks/tech/gravity_affected.json)——重力影响
		- [light_emit](https://raw.githubusercontent.com/ououn/UIN/master/data/uin/tags/blocks/tech/light_emit.json)——光源方块（包括可能成为光源的方块，如熔炉）（flowing_lava不是方块标签，而是流体标签）
		- [redstone_opaque](https://raw.githubusercontent.com/ououn/UIN/master/data/uin/tags/blocks/tech/redstone_opaque.json)——不透明方块，能被红石充能
		- [redstone_transparent](https://raw.githubusercontent.com/ououn/UIN/master/data/uin/tags/blocks/tech/redstone_transparent.json)——透明方块，不能被红石充能（包括半砖，然而双半砖能被充能）
		- [solid_none](https://raw.githubusercontent.com/ououn/UIN/master/data/uin/tags/blocks/tech/solid_none.json)——非固体方块，完全不改变经过实体高度，完全不阻碍实体经过的方块（不包括 minecraft:snow）
		- [store_item](https://raw.githubusercontent.com/ououn/UIN/master/data/uin/tags/blocks/tech/store_item.json)——包含物品，能往存放物品的方块。
	- **tech/blockstates**
		- [age](https://raw.githubusercontent.com/ououn/UIN/master/data/uin/tags/blocks/tech/blockstates/age.json)——年龄，植物生长的状态和火的传播状态等。可能的状态：0 ~ 25
		- [axis](https://raw.githubusercontent.com/ououn/UIN/master/data/uin/tags/blocks/tech/blockstates/axis.json)——轴。可能的状态：x，y，z
		- [distance](https://raw.githubusercontent.com/ououn/UIN/master/data/uin/tags/blocks/tech/blockstates/distance.json)——距离，距基础方块的距离。可能的状态：0 ~ 7
		- [down](https://raw.githubusercontent.com/ououn/UIN/master/data/uin/tags/blocks/tech/blockstates/down.json)——下方，方向。可能的状态：true，false
		- [east](https://raw.githubusercontent.com/ououn/UIN/master/data/uin/tags/blocks/tech/blockstates/east.json)——东方，方向。可能的状态：true，false，none，side，up
		- [face](https://raw.githubusercontent.com/ououn/UIN/master/data/uin/tags/blocks/tech/blockstates/face.json)——面向依附。可能的状态：ceiling，floor，wall
		- [facing](https://raw.githubusercontent.com/ououn/UIN/master/data/uin/tags/blocks/tech/blockstates/facing.json)——面向。包含以下可能的标签状态：nsweud，nswed，nswe
		- [facing_nswe](https://raw.githubusercontent.com/ououn/UIN/master/data/uin/tags/blocks/tech/blockstates/facing_nswe.json)——面向。可能的状态：north，south，west，east
		- [facing_nswed](https://raw.githubusercontent.com/ououn/UIN/master/data/uin/tags/blocks/tech/blockstates/facing_nswed.json)——面向。可能的状态：north，south，west，east，down
		- [facing_nsweud](https://raw.githubusercontent.com/ououn/UIN/master/data/uin/tags/blocks/tech/blockstates/facing_nsweud.json)——面向。可能的状态：north，south，west，east，up，down
		- [half](https://raw.githubusercontent.com/ououn/UIN/master/data/uin/tags/blocks/tech/blockstates/half.json)——半格。可能的状态：lower，upper，bottom，top
		- [have_item](https://raw.githubusercontent.com/ououn/UIN/master/data/uin/tags/blocks/tech/blockstates/have_item.json)——持物。包含了炼药台、讲台和唱片盒的5个has_xxx方块状态，可能的状态：true，false
		- [level](https://raw.githubusercontent.com/ououn/UIN/master/data/uin/tags/blocks/tech/blockstates/level.json)——水平。可能的状态：0 ~ 15
		- [lit](https://raw.githubusercontent.com/ououn/UIN/master/data/uin/tags/blocks/tech/blockstates/lit.json)——发光...是否处于发亮状态，影响光照等级。可能的状态：true，false
		- [north](https://raw.githubusercontent.com/ououn/UIN/master/data/uin/tags/blocks/tech/blockstates/north.json)——北方，方向。可能的状态：true，false，none，side，up
		- [open](https://raw.githubusercontent.com/ououn/UIN/master/data/uin/tags/blocks/tech/blockstates/open.json)——打开，存在于门与木桶。可能的状态：true，false
		- [power](https://raw.githubusercontent.com/ououn/UIN/master/data/uin/tags/blocks/tech/blockstates/power.json)——红石信号，传输的红石信号等级。可能的状态：0 ~ 15
		- [powered](https://raw.githubusercontent.com/ououn/UIN/master/data/uin/tags/blocks/tech/blockstates/powered.json)——红石充能，红石元件是否处于充能状态。可能的状态：true，false
		- [rotation](https://raw.githubusercontent.com/ououn/UIN/master/data/uin/tags/blocks/tech/blockstates/rotation.json)——旋转，存在于置地木牌、头颅和旗帜。可能的状态：0 ~ 15
		- [shape](https://raw.githubusercontent.com/ououn/UIN/master/data/uin/tags/blocks/tech/blockstates/shape.json)——连接，铁轨与楼梯的形状。可能的状态：ascending_north，ascending_south，ascending_west，ascending_east，east_west，north_south，north_east，north_west，south_east，south_west，inner_left，inner_right，outer_left，outer_right，straight
		- [snowy](https://raw.githubusercontent.com/ououn/UIN/master/data/uin/tags/blocks/tech/blockstates/snowy.json)——雪层。可能的状态：true，false
		- [south](https://raw.githubusercontent.com/ououn/UIN/master/data/uin/tags/blocks/tech/blockstates/south.json)——南方，方向。可能的状态：true，false，none，side，up
		- [stage](https://raw.githubusercontent.com/ououn/UIN/master/data/uin/tags/blocks/tech/blockstates/stage.json)——阶段，存在于树苗和竹子。可能的状态：0 ~ 1
		- [triggered](https://raw.githubusercontent.com/ououn/UIN/master/data/uin/tags/blocks/tech/blockstates/triggered.json)——触发，存在于发射器和投射器。可能的状态：true，false
		- [type](https://raw.githubusercontent.com/ououn/UIN/master/data/uin/tags/blocks/tech/blockstates/type.json)——类型。存在于活塞、箱子和半砖。可能的状态：normal，sticky，left，right，single，bottom，double，top
		- [up](https://raw.githubusercontent.com/ououn/UIN/master/data/uin/tags/blocks/tech/blockstates/up.json)——上方，方向。可能的状态：true，false
		- [waterlogged](https://raw.githubusercontent.com/ououn/UIN/master/data/uin/tags/blocks/tech/blockstates/waterlogged.json)——含水方块，状态可为含水或不含水的方块。可能的状态：true，false
		- [west](https://raw.githubusercontent.com/ououn/UIN/master/data/uin/tags/blocks/tech/blockstates/west.json)——西方，方向。可能的状态：true，false，none，side，up


- 物品
	- **general**
		- [armors](https://raw.githubusercontent.com/ououn/UIN/master/data/uin/tags/items/general/armors.json)——盔甲
		- [axes](https://raw.githubusercontent.com/ououn/UIN/master/data/uin/tags/items/general/axes.json)——斧子
		- [banner_patterns](https://raw.githubusercontent.com/ououn/UIN/master/data/uin/tags/items/general/banner_patterns.json)——旗帜图案
		- [boots](https://raw.githubusercontent.com/ououn/UIN/master/data/uin/tags/items/general/boots.json)——靴子
		- [buckets](https://raw.githubusercontent.com/ououn/UIN/master/data/uin/tags/items/general/buckets.json)——桶
		- [command_blocks](https://raw.githubusercontent.com/ououn/UIN/master/data/uin/tags/items/general/command_blocks.json)——命令方块
		- [concrete](https://raw.githubusercontent.com/ououn/UIN/master/data/uin/tags/items/general/concrete.json)——混凝土
		- [concrete_powder](https://raw.githubusercontent.com/ououn/UIN/master/data/uin/tags/items/general/concrete_powder.json)——混凝土粉末
		- [chestplates](https://raw.githubusercontent.com/ououn/UIN/master/data/uin/tags/items/general/chestplates.json)——胸甲
		- [dye](https://raw.githubusercontent.com/ououn/UIN/master/data/uin/tags/items/general/dye.json)——染料
		- [fence_gates](https://raw.githubusercontent.com/ououn/UIN/master/data/uin/tags/items/general/fence_gates.json)——栅栏门
		- [fish_buckets](https://raw.githubusercontent.com/ououn/UIN/master/data/uin/tags/items/general/fish_buckets.json)——鱼桶
		- [fungus](https://raw.githubusercontent.com/ououn/UIN/master/data/uin/tags/items/general/fungus.json)——菌类
		- [glass_blocks](https://raw.githubusercontent.com/ououn/UIN/master/data/uin/tags/items/general/glass_blocks.json)——玻璃
		- [glass_panes](https://raw.githubusercontent.com/ououn/UIN/master/data/uin/tags/items/general/glass_panes.json)——玻璃板
		- [grass](https://raw.githubusercontent.com/ououn/UIN/master/data/uin/tags/items/general/grass.json)——草丛
		- [helmets](https://raw.githubusercontent.com/ououn/UIN/master/data/uin/tags/items/general/helmets.json)——头盔
		- [hoes](https://raw.githubusercontent.com/ououn/UIN/master/data/uin/tags/items/general/hoes.json)——锄头
		- [horse_armors](https://raw.githubusercontent.com/ououn/UIN/master/data/uin/tags/items/general/horse_armors.json)——马凯
		- [leggings](https://raw.githubusercontent.com/ououn/UIN/master/data/uin/tags/items/general/leggings.json)——护腿
		- [minecarts](https://raw.githubusercontent.com/ououn/UIN/master/data/uin/tags/items/general/minecarts.json)——矿车
		- [mineral_blocks](https://raw.githubusercontent.com/ououn/UIN/master/data/uin/tags/items/general/mineral_blocks.json)——矿物块
		- [minerals](https://raw.githubusercontent.com/ououn/UIN/master/data/uin/tags/items/general/minerals.json)——矿物
		- [ores](https://raw.githubusercontent.com/ououn/UIN/master/data/uin/tags/items/general/ores.json)——原矿。镶金黑石不被视为矿石
		- [pickaxes](https://raw.githubusercontent.com/ououn/UIN/master/data/uin/tags/items/general/pickaxes.json)——稿子
		- [potions](https://raw.githubusercontent.com/ououn/UIN/master/data/uin/tags/items/general/potions.json)——药水
		- [pressure_plates](https://raw.githubusercontent.com/ououn/UIN/master/data/uin/tags/items/general/pressure_plates.json)——压力板
		- [rods](https://raw.githubusercontent.com/ououn/UIN/master/data/uin/tags/items/general/rods.json)——钓竿
		- [roots](https://raw.githubusercontent.com/ououn/UIN/master/data/uin/tags/items/general/roots.json)——菌素
		- [shovels](https://raw.githubusercontent.com/ououn/UIN/master/data/uin/tags/items/general/shovels.json)——铲子
		- [shulker_boxes](https://raw.githubusercontent.com/ououn/UIN/master/data/uin/tags/items/general/shulker_boxes.json)——潜影盒
		- [skulls](https://raw.githubusercontent.com/ououn/UIN/master/data/uin/tags/items/general/skulls.json)——头颅
		- [smooth_stone](https://raw.githubusercontent.com/ououn/UIN/master/data/uin/tags/items/general/smooth_stone.json)——平滑石类
		- [soups](https://raw.githubusercontent.com/ououn/UIN/master/data/uin/tags/items/general/soups.json)——汤
		- [spawn_eggs](https://raw.githubusercontent.com/ououn/UIN/master/data/uin/tags/items/general/spawn_eggs.json)——刷怪蛋
		- [sponge](https://raw.githubusercontent.com/ououn/UIN/master/data/uin/tags/items/general/sponge.json)——海绵
		- [swords](https://raw.githubusercontent.com/ououn/UIN/master/data/uin/tags/items/general/swords.json)——剑
		- [terracotta](https://raw.githubusercontent.com/ououn/UIN/master/data/uin/tags/items/general/terracotta.json)——陶瓦
		- [terracotta_glazed](https://raw.githubusercontent.com/ououn/UIN/master/data/uin/tags/items/general/terracotta_glazed.json)——带釉陶瓦
		- [weapons](https://raw.githubusercontent.com/ououn/UIN/master/data/uin/tags/items/general/weapons.json)——武器
		- [weighted_pressure_plates](https://raw.githubusercontent.com/ououn/UIN/master/data/uin/tags/items/general/weighted_pressure_plates.json)——测重压力板
	- **tech**
		- [all](https://raw.githubusercontent.com/ououn/UIN/master/data/uin/tags/items/tech/all.json)——所有物品
		- [drinkable](https://raw.githubusercontent.com/ououn/UIN/master/data/uin/tags/items/tech/drinkable.json)——可饮用
		- [eatable](https://raw.githubusercontent.com/ououn/UIN/master/data/uin/tags/items/tech/eatable.json)——可食用（不包括蛋糕，不能直接食用）
		- [ench](https://raw.githubusercontent.com/ououn/UIN/master/data/uin/tags/items/tech/ench.json)——附魔台可附魔物品
		- [x_1](https://raw.githubusercontent.com/ououn/UIN/master/data/uin/tags/items/tech/x_1.json)——最大叠堆数量 1（不包括air）
		- [x_16](https://raw.githubusercontent.com/ououn/UIN/master/data/uin/tags/items/tech/x_16.json)——最大叠堆数量 16（不包括air）
		- [x_64](https://raw.githubusercontent.com/ououn/UIN/master/data/uin/tags/items/tech/x_64.json)——最大叠堆数量 64（不包括air）


- 实体
	- **general**
		- [illagers](https://raw.githubusercontent.com/ououn/UIN/master/data/uin/tags/entity_types/general/illagers.json)——灾厄村民
		- [item_frames](https://raw.githubusercontent.com/ououn/UIN/master/data/uin/tags/entity_types/general/item_frames.json)——展示框
		- [minecarts](https://raw.githubusercontent.com/ououn/UIN/master/data/uin/tags/entity_types/general/minecarts.json)——矿车
		- [spiders](https://raw.githubusercontent.com/ououn/UIN/master/data/uin/tags/entity_types/general/spiders.json)——蜘蛛
	- **tech**
		- [ages](https://raw.githubusercontent.com/ououn/UIN/master/data/uin/tags/entity_types/tech/ages.json)——随Age变化而改变形态/碰撞箱大小（不包括药水云、经验球、物品）
		- [all](https://raw.githubusercontent.com/ououn/UIN/master/data/uin/tags/entity_types/tech/all.json)——所有实体
		- [aquatic](https://raw.githubusercontent.com/ououn/UIN/master/data/uin/tags/entity_types/tech/aquatic.json)——海洋生物，受穿刺附魔伤害影响
		- [arthropods](https://raw.githubusercontent.com/ououn/UIN/master/data/uin/tags/entity_types/tech/arthropods.json)——节肢生物，受节肢杀手附魔影响
		- [blocks](https://raw.githubusercontent.com/ououn/UIN/master/data/uin/tags/entity_types/tech/blocks.json)——方块
		- [hostile](https://raw.githubusercontent.com/ououn/UIN/master/data/uin/tags/entity_types/tech/hostile.json)——以玩家做区分标准，敌对型生物
			- 鸡骑士、骷髅骑士、蜘蛛骑士、杀手兔没有单独id，故不在列表内
		- [items](https://raw.githubusercontent.com/ououn/UIN/master/data/uin/tags/entity_types/tech/items.json)——掉落物
		- [marker](https://raw.githubusercontent.com/ououn/UIN/master/data/uin/tags/entity_types/tech/marker.json)——盔甲架，药水云
		- [misc](https://raw.githubusercontent.com/ououn/UIN/master/data/uin/tags/entity_types/tech/misc.json)——杂项
		- [mobs](https://raw.githubusercontent.com/ououn/UIN/master/data/uin/tags/entity_types/tech/mobs.json)——所有生物（不包括玩家）
		- [neutral](https://raw.githubusercontent.com/ououn/UIN/master/data/uin/tags/entity_types/tech/neutral.json)——以玩家做区分标准，中立型生物
		- [non_mobs](https://raw.githubusercontent.com/ououn/UIN/master/data/uin/tags/entity_types/tech/non_mobs.json)——所有非生物实体
		- [passive](https://raw.githubusercontent.com/ououn/UIN/master/data/uin/tags/entity_types/tech/passive.json)——以玩家做区分标准，被动型生物
		- [projectiles](https://raw.githubusercontent.com/ououn/UIN/master/data/uin/tags/entity_types/tech/projectiles.json)——弹射物
		- [tameable](https://raw.githubusercontent.com/ououn/UIN/master/data/uin/tags/entity_types/tech/tameable.json)——可驯服类型
		- [undead](https://raw.githubusercontent.com/ououn/UIN/master/data/uin/tags/entity_types/tech/undead.json)——不死生物，获得恢复效果时受伤
		- [vehicles](https://raw.githubusercontent.com/ououn/UIN/master/data/uin/tags/entity_types/tech/vehicles.json)——载具，船 & 矿车
	- **custom**
		- [graveborn](https://raw.githubusercontent.com/ououn/UIN/master/data/uin/tags/entity_types/custom/graveborn.json)——亡灵类



***
# 特别感谢以下大佬的贡献
- [kongbaiyo](https://www.mcbbs.net/?574210)
- [SPGoding](https://www.mcbbs.net/?2444378)
- [Teenager_Yang](https://www.mcbbs.net/?2337994)
- [CR_019](https://www.mcbbs.net/?2504275)
- [底层咸鱼](https://www.mcbbs.net/?894447)