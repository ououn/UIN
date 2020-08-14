**当前数据包版本——v2.0.0.2**

**适用于MC版本—— 1.16.2 rc1 ~ 1.16.2**

**方块/实体/物品文件夹下各有一份txt格式的包含所有id且不使用任何其他标签的标签文本，可单独使用**

**若以下内容与实际情况有出入，或漏标了几个。请联系我以便即时修正，感谢*

**更新日志**

[其他]
- 未来版本将向下兼容（至1.16.2 rc1）
- 数据包 pack_format 更新至 6
- 新增方块状态标签
	- 目前收录的状态主要存在于至少三种方块
	- 参考源非最新版本且存在多处误导，因此考虑在未来的一段时间内进行校对
- 标签整理
- 简化更新日志
- 新增方块/物品/实体至对应标签
- 新增方块标签，置地旗帜 uin:general/ground_banners
- 新增方块标签，置地头颅 uin:general/ground_skulls
- 新增方块标签，灯笼 uin:general/lanterns
- 新增方块标签，活塞 uin:general/piston
- 新增方块标签，砂岩 uin:general/sandstones
- 新增方块标签，藤蔓 uin:general/vines
- 新增方块标签，贴墙旗帜 uin:general/wall_banners
- 新增方块标签，墙上头颅 uin:general/wall_skulls
- 新增方块标签，贴墙火把 uin:general/wall_torches
- 新增方块标签，无方块状态 uin:tech/blockstate_none
- 新增方块标签，伤害 uin:tech/damage
- 新增方块状态标签，年龄 uin:tech/blockstates/age
- 新增方块状态标签，轴 uin:tech/blockstates/axis
- 新增方块状态标签，距离 uin:tech/blockstates/distance
- 新增方块状态标签，下方 uin:tech/blockstates/down
- 新增方块状态标签，东方 uin:tech/blockstates/east
- 新增方块状态标签，面向依附 uin:tech/blockstates/face
- 新增方块状态标签，面向 uin:tech/blockstates/facing
- 新增方块状态标签，面向_NSWE uin:tech/blockstates/facing_nswe
- 新增方块状态标签，面向_NSWED uin:tech/blockstates/facing_nswed
- 新增方块状态标签，面向_NSWEUD uin:tech/blockstates/facing_nsweud
- 新增方块状态标签，半格 uin:tech/blockstates/half
- 新增方块状态标签，持物 uin:tech/blockstates/have_item
- 新增方块状态标签，水平 uin:tech/blockstates/level
- 新增方块状态标签，发光 uin:tech/blockstates/lit
- 新增方块状态标签，北方 uin:tech/blockstates/north
- 新增方块状态标签，打开 uin:tech/blockstates/open
- 新增方块状态标签，红石信号 uin:tech/blockstates/power
- 新增方块状态标签，红石充能 uin:tech/blockstates/powered
- 新增方块状态标签，旋转 uin:tech/blockstates/rotation
- 新增方块状态标签，连接 uin:tech/blockstates/shape
- 新增方块状态标签，雪层 uin:tech/blockstates/snowy
- 新增方块状态标签，南方 uin:tech/blockstates/south
- 新增方块状态标签，阶段 uin:tech/blockstates/stage
- 新增方块状态标签，触发 uin:tech/blockstates/triggered
- 新增方块状态标签，类型 uin:tech/blockstates/type
- 新增方块状态标签，上方 uin:tech/blockstates/up
- 新增方块状态标签，含水 uin:tech/blockstates/waterlogged
- 新增方块状态标签，西方 uin:tech/blockstates/west
- 新增物品标签，盔甲 uin:general/armors
- 新增物品标签，斧头 uin:general/axes
- 新增物品标签，旗帜图案 uin:general/banner_patterns
- 新增物品标签，靴子 uin:general/boots
- 新增物品标签，桶 uin:general/buckets
- 新增物品标签，鱼桶 uin:general/fish_buckets
- 新增物品标签，胸甲 uin:general/chestplates
- 新增物品标签，染料 uin:general/dye
- 新增物品标签，头盔 uin:general/helmets
- 新增物品标签，锄头 uin:general/hoes
- 新增物品标签，马凯 uin:general/horse_armors
- 新增物品标签，灯笼 uin:general/lanterns
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
- 新增实体标签，方块 uin:tech/blocks
- 新增实体标签，掉落物 uin:tech/items
- 新增实体标签，杂项 uin:tech/misc
- 新增实体标签，弹射物 uin:tech/projectiles
- 新增实体标签，载具 uin:tech/vehicles
- 雪傀儡归类至实体标签 uin:tech/passive
- 重命名方块标签，uin:tech/solid_not > uin:tech/solid_none
- 移动方块标签，uin:tech/infested > uin:general/infested
- 移除方块标签，uin:general/pressure_plates，使用minecraft:pressure_plates
- 移除方块标签，uin:general/fence_gates，使用minecraft:fence_gates

# 个人备注

- 方块
	- blockstate 目前没收录的状态
		- attached,attachment,bites,bottom,charges,conditional,delay,disarmed,drag,eggs,enabled,extended,eye
		- hanging,hatch,hinge,in_wall,instrument,inverted,layers,leaves,locked,mode,moisture,note,occupied
		- part,persistent,pickles,short,signal_fire,unstable

- 物品

- 实体
	- 巨人(minecraft:giant)因没有AI，暂归类为passive
	- 铁傀儡，情况特殊，不纳入仇恨类型

*若有其他标签请求可在论坛内[回复/私信本人](https://www.mcbbs.net/?725858)。实用、技术性的标签优先
也可以写完后pull过来，验证过后合并*

*存在部分争议的标签考虑移动到custom下，争议过大的标签将取消制作*

**谢谢各位的支持！**


# 已制作

- 方块
	- **general**
		- [chests](https://raw.githubusercontent.com/ououn/UIN/2.0.0.2/data/uin/tags/blocks/general/chests.json)——储物箱
		- [command_blocks](https://raw.githubusercontent.com/ououn/UIN/2.0.0.2/data/uin/tags/blocks/general/command_blocks.json)——命令方块
		- [concrete](https://raw.githubusercontent.com/ououn/UIN/2.0.0.2/data/uin/tags/blocks/general/concrete.json)——混凝土
        - [concrete_powder](https://raw.githubusercontent.com/ououn/UIN/2.0.0.2/data/uin/tags/blocks/general/concrete_powder.json)——混凝土粉末
		- [dead_coral_blocks](https://raw.githubusercontent.com/ououn/UIN/2.0.0.2/data/uin/tags/blocks/general/dead_coral_blocks.json)——失活的珊瑚块
		- [dead_coral_fans](https://raw.githubusercontent.com/ououn/UIN/2.0.0.2/data/uin/tags/blocks/general/dead_coral_fans.json)——失活的珊瑚扇
		- [dead_coral_wall_fans](https://raw.githubusercontent.com/ououn/UIN/2.0.0.2/data/uin/tags/blocks/general/dead_coral_wall_fans.json)——失活的墙上的珊瑚扇
		- [dead_corals](https://raw.githubusercontent.com/ououn/UIN/2.0.0.2/data/uin/tags/blocks/general/dead_corals.json)——失活的珊瑚
		- [ferns](https://raw.githubusercontent.com/ououn/UIN/2.0.0.2/data/uin/tags/blocks/general/ferns.json)——蕨类
		- [furnaces](https://raw.githubusercontent.com/ououn/UIN/2.0.0.2/data/uin/tags/blocks/general/furnaces.json)——烤具
		- [gases](https://raw.githubusercontent.com/ououn/UIN/2.0.0.2/data/uin/tags/blocks/general/gases.json)——气体
		- [glass_blocks](https://raw.githubusercontent.com/ououn/UIN/2.0.0.2/data/uin/tags/blocks/general/glass_blocks.json)——玻璃
		- [glass_panes](https://raw.githubusercontent.com/ououn/UIN/2.0.0.2/data/uin/tags/blocks/general/glass_panes.json)——玻璃板
		- [ground_banners](https://raw.githubusercontent.com/ououn/UIN/2.0.0.2/data/uin/tags/blocks/general/ground_banners.json)——置地旗帜
		- [ground_skulls](https://raw.githubusercontent.com/ououn/UIN/2.0.0.2/data/uin/tags/blocks/general/ground_skulls.json)——置地头颅
		- [infested](https://raw.githubusercontent.com/ououn/UIN/2.0.0.2/data/uin/tags/blocks/general/infested.json)——被虫蚀的方块
		- [lanterns](https://raw.githubusercontent.com/ououn/UIN/2.0.0.2/data/uin/tags/blocks/general/lanterns.json)——灯笼。灯笼和灵魂灯笼
		- [liquid](https://raw.githubusercontent.com/ououn/UIN/2.0.0.2/data/uin/tags/blocks/general/liquid.json)——液体
		- [ores](https://raw.githubusercontent.com/ououn/UIN/2.0.0.2/data/uin/tags/blocks/general/ores.json)——原矿
		- [piston](https://raw.githubusercontent.com/ououn/UIN/2.0.0.2/data/uin/tags/blocks/general/piston.json)——活塞与其产物
		- [sandstones](https://raw.githubusercontent.com/ououn/UIN/2.0.0.2/data/uin/tags/blocks/general/sandstones.json)——砂岩
		- [skulls](https://raw.githubusercontent.com/ououn/UIN/2.0.0.2/data/uin/tags/blocks/general/skulls.json)——头颅
		- [terracotta](https://raw.githubusercontent.com/ououn/UIN/2.0.0.2/data/uin/tags/blocks/general/terracotta.json)——陶瓦
		- [terracotta_glazed](https://raw.githubusercontent.com/ououn/UIN/2.0.0.2/data/uin/tags/blocks/general/terracotta_glazed.json)——带釉陶瓦
		- [torches](https://raw.githubusercontent.com/ououn/UIN/2.0.0.2/data/uin/tags/blocks/general/torches.json)——火把、红石火把
		- [vines](https://raw.githubusercontent.com/ououn/UIN/2.0.0.2/data/uin/tags/blocks/general/vines.json)——藤蔓
		- [wall_banners](https://raw.githubusercontent.com/ououn/UIN/2.0.0.2/data/uin/tags/blocks/general/wall_banners.json)——贴墙旗帜
		- [wall_skulls](https://raw.githubusercontent.com/ououn/UIN/2.0.0.2/data/uin/tags/blocks/general/wall_skulls.json)——墙上头颅
		- [wall_torches](https://raw.githubusercontent.com/ououn/UIN/2.0.0.2/data/uin/tags/blocks/general/wall_torches.json)——贴墙火把
		- [weighted_pressure_plates](https://raw.githubusercontent.com/ououn/UIN/2.0.0.2/data/uin/tags/blocks/general/weighted_pressure_plates.json)——测重压力板
	- **tech**
		- [all](https://raw.githubusercontent.com/ououn/UIN/2.0.0.2/data/uin/tags/blocks/tech/all.json)——所有方块
		- [block_entities](https://raw.githubusercontent.com/ououn/UIN/2.0.0.2/data/uin/tags/blocks/tech/block_entities.json)——方块实体
		- [components_mechanism](https://raw.githubusercontent.com/ououn/UIN/2.0.0.2/data/uin/tags/blocks/tech/components_mechanism.json)——机械元件
		- [components_power](https://raw.githubusercontent.com/ououn/UIN/2.0.0.2/data/uin/tags/blocks/tech/components_power.json)——电源元件
		- [components_redstone](https://raw.githubusercontent.com/ououn/UIN/2.0.0.2/data/uin/tags/blocks/tech/components_redstone.json)——红石元件
		- [components_transmission](https://raw.githubusercontent.com/ououn/UIN/2.0.0.2/data/uin/tags/blocks/tech/components_transmission.json)——传输元件
		- [damage](https://raw.githubusercontent.com/ououn/UIN/2.0.0.2/data/uin/tags/blocks/tech/damage.json)——能造成伤害的方块（#campfires和sweet_berry_bush视方块状态而定，wither_rose则通过药水效果达成）
		- [gravity_affected](https://raw.githubusercontent.com/ououn/UIN/2.0.0.2/data/uin/tags/blocks/tech/gravity_affected.json)——重力影响
		- [light_emit](https://raw.githubusercontent.com/ououn/UIN/2.0.0.2/data/uin/tags/blocks/tech/light_emit.json)——光源方块（包括可能成为光源的方块，如熔炉）（flowing_lava不是方块标签，而是流体标签）
		- [redstone_opaque](https://raw.githubusercontent.com/ououn/UIN/2.0.0.2/data/uin/tags/blocks/tech/redstone_opaque.json)——不透明方块，能被红石充能
		- [redstone_transparent](https://raw.githubusercontent.com/ououn/UIN/2.0.0.2/data/uin/tags/blocks/tech/redstone_transparent.json)——透明方块，不能被红石充能
		- [solid_none](https://raw.githubusercontent.com/ououn/UIN/2.0.0.2/data/uin/tags/blocks/tech/solid_none.json)——非固体方块，完全不改变经过实体高度，完全不阻碍实体经过的方块（不包括 minecraft:snow）
	- **tech/blockstates**
		- [age](https://raw.githubusercontent.com/ououn/UIN/2.0.0.2/data/uin/tags/blocks/tech/blockstates/age.json)——年龄，植物生长的状态和火的传播状态等。可能的状态：0 ~ 25
		- [axis](https://raw.githubusercontent.com/ououn/UIN/2.0.0.2/data/uin/tags/blocks/tech/blockstates/axis.json)——轴。可能的状态：x，y，z
		- [distance](https://raw.githubusercontent.com/ououn/UIN/2.0.0.2/data/uin/tags/blocks/tech/blockstates/distance.json)——距离，距基础方块的距离。可能的状态：0 ~ 7
		- [down](https://raw.githubusercontent.com/ououn/UIN/2.0.0.2/data/uin/tags/blocks/tech/blockstates/down.json)——下方，方向。可能的状态：true，false
		- [east](https://raw.githubusercontent.com/ououn/UIN/2.0.0.2/data/uin/tags/blocks/tech/blockstates/east.json)——东方，方向。可能的状态：true，false，none，side，up
		- [face](https://raw.githubusercontent.com/ououn/UIN/2.0.0.2/data/uin/tags/blocks/tech/blockstates/face.json)——面向依附。可能的状态：ceiling，floor，wall
		- [facing](https://raw.githubusercontent.com/ououn/UIN/2.0.0.2/data/uin/tags/blocks/tech/blockstates/facing.json)——面向。包含以下可能的标签状态：nsweud，nswed，nswe
		- [facing_nswe](https://raw.githubusercontent.com/ououn/UIN/2.0.0.2/data/uin/tags/blocks/tech/blockstates/facing_nswe.json)——面向。可能的状态：north，south，west，east
		- [facing_nswed](https://raw.githubusercontent.com/ououn/UIN/2.0.0.2/data/uin/tags/blocks/tech/blockstates/facing_nswed.json)——面向。可能的状态：north，south，west，east，down
		- [facing_nsweud](https://raw.githubusercontent.com/ououn/UIN/2.0.0.2/data/uin/tags/blocks/tech/blockstates/facing_nsweud.json)——面向。可能的状态：north，south，west，east，up，down
		- [half](https://raw.githubusercontent.com/ououn/UIN/2.0.0.2/data/uin/tags/blocks/tech/blockstates/half.json)——半格。可能的状态：lower，upper，bottom，top
		- [have_item](https://raw.githubusercontent.com/ououn/UIN/2.0.0.2/data/uin/tags/blocks/tech/blockstates/have_item.json)——持物。包含了炼药台、讲台和唱片盒的5个has_xxx方块状态，可能的状态：true，false
		- [level](https://raw.githubusercontent.com/ououn/UIN/2.0.0.2/data/uin/tags/blocks/tech/blockstates/level.json)——水平。可能的状态：0 ~ 15
		- [lit](https://raw.githubusercontent.com/ououn/UIN/2.0.0.2/data/uin/tags/blocks/tech/blockstates/lit.json)——发光...是否处于发亮状态，影响光照等级。可能的状态：true，false
		- [north](https://raw.githubusercontent.com/ououn/UIN/2.0.0.2/data/uin/tags/blocks/tech/blockstates/north.json)——北方，方向。可能的状态：true，false，none，side，up
		- [open](https://raw.githubusercontent.com/ououn/UIN/2.0.0.2/data/uin/tags/blocks/tech/blockstates/open.json)——打开，存在于门与木桶。可能的状态：true，false
		- [power](https://raw.githubusercontent.com/ououn/UIN/2.0.0.2/data/uin/tags/blocks/tech/blockstates/power.json)——红石信号，传输的红石信号等级。可能的状态：0 ~ 15
		- [powered](https://raw.githubusercontent.com/ououn/UIN/2.0.0.2/data/uin/tags/blocks/tech/blockstates/powered.json)——红石充能，红石元件是否处于充能状态。可能的状态：true，false
		- [rotation](https://raw.githubusercontent.com/ououn/UIN/2.0.0.2/data/uin/tags/blocks/tech/blockstates/rotation.json)——旋转，存在于置地木牌、头颅和旗帜。可能的状态：0 ~ 15
		- [shape](https://raw.githubusercontent.com/ououn/UIN/2.0.0.2/data/uin/tags/blocks/tech/blockstates/shape.json)——连接，铁轨与楼梯的形状。可能的状态：ascending_north，ascending_south，ascending_west，ascending_east，east_west，north_south，north_east，north_west，south_east，south_west，inner_left，inner_right，outer_left，outer_right，straight
		- [snowy](https://raw.githubusercontent.com/ououn/UIN/2.0.0.2/data/uin/tags/blocks/tech/blockstates/snowy.json)——雪层。可能的状态：true，false
		- [south](https://raw.githubusercontent.com/ououn/UIN/2.0.0.2/data/uin/tags/blocks/tech/blockstates/south.json)——南方，方向。可能的状态：true，false，none，side，up
		- [stage](https://raw.githubusercontent.com/ououn/UIN/2.0.0.2/data/uin/tags/blocks/tech/blockstates/stage.json)——阶段，存在于树苗和竹子。可能的状态：0 ~ 1
		- [triggered](https://raw.githubusercontent.com/ououn/UIN/2.0.0.2/data/uin/tags/blocks/tech/blockstates/triggered.json)——触发，存在于发射器和投射器。可能的状态：true，false
		- [type](https://raw.githubusercontent.com/ououn/UIN/2.0.0.2/data/uin/tags/blocks/tech/blockstates/type.json)——类型。存在于活塞、箱子和半砖。可能的状态：normal，sticky，left，right，single，bottom，double，top
		- [up](https://raw.githubusercontent.com/ououn/UIN/2.0.0.2/data/uin/tags/blocks/tech/blockstates/up.json)——上方，方向。可能的状态：true，false
		- [waterlogged](https://raw.githubusercontent.com/ououn/UIN/2.0.0.2/data/uin/tags/blocks/tech/blockstates/waterlogged.json)——含水方块，状态可为含水或不含水的方块。可能的状态：true，false
		- [west](https://raw.githubusercontent.com/ououn/UIN/2.0.0.2/data/uin/tags/blocks/tech/blockstates/west.json)——西方，方向。可能的状态：true，false，none，side，up


- 物品
	- **general**
		- [armors](https://raw.githubusercontent.com/ououn/UIN/2.0.0.2/data/uin/tags/items/general/armors.json)——盔甲
		- [axes](https://raw.githubusercontent.com/ououn/UIN/2.0.0.2/data/uin/tags/items/general/axes.json)——斧子
		- [banner_patterns](https://raw.githubusercontent.com/ououn/UIN/2.0.0.2/data/uin/tags/items/general/banner_patterns.json)——旗帜图案
		- [boots](https://raw.githubusercontent.com/ououn/UIN/2.0.0.2/data/uin/tags/items/general/boots.json)——靴子
		- [buckets](https://raw.githubusercontent.com/ououn/UIN/2.0.0.2/data/uin/tags/items/general/buckets.json)——桶
		- [chestplates](https://raw.githubusercontent.com/ououn/UIN/2.0.0.2/data/uin/tags/items/general/chestplates.json)——胸甲
		- [dye](https://raw.githubusercontent.com/ououn/UIN/2.0.0.2/data/uin/tags/items/general/dye.json)——染料
		- [fence_gates](https://raw.githubusercontent.com/ououn/UIN/2.0.0.2/data/uin/tags/items/general/fence_gates.json)——栅栏门
		- [fish_buckets](https://raw.githubusercontent.com/ououn/UIN/2.0.0.2/data/uin/tags/items/general/fish_buckets.json)——鱼桶
		- [helmets](https://raw.githubusercontent.com/ououn/UIN/2.0.0.2/data/uin/tags/items/general/helmets.json)——头盔
		- [hoes](https://raw.githubusercontent.com/ououn/UIN/2.0.0.2/data/uin/tags/items/general/hoes.json)——锄头
		- [horse_armors](https://raw.githubusercontent.com/ououn/UIN/2.0.0.2/data/uin/tags/items/general/horse_armors.json)——马凯
		- [leggings](https://raw.githubusercontent.com/ououn/UIN/2.0.0.2/data/uin/tags/items/general/leggings.json)——护腿
		- [minecarts](https://raw.githubusercontent.com/ououn/UIN/2.0.0.2/data/uin/tags/items/general/minecarts.json)——矿车
		- [ores](https://raw.githubusercontent.com/ououn/UIN/2.0.0.2/data/uin/tags/items/general/ores.json)——原矿
		- [pickaxes](https://raw.githubusercontent.com/ououn/UIN/2.0.0.2/data/uin/tags/items/general/pickaxes.json)——稿子
		- [pressure_plates](https://raw.githubusercontent.com/ououn/UIN/2.0.0.2/data/uin/tags/items/general/pressure_plates.json)——压力板
		- [shovels](https://raw.githubusercontent.com/ououn/UIN/2.0.0.2/data/uin/tags/items/general/shovels.json)——铲子
		- [skulls](https://raw.githubusercontent.com/ououn/UIN/2.0.0.2/data/uin/tags/items/general/skulls.json)——头颅
		- [spawn_eggs](https://raw.githubusercontent.com/ououn/UIN/2.0.0.2/data/uin/tags/items/general/spawn_eggs.json)——刷怪蛋
		- [swords](https://raw.githubusercontent.com/ououn/UIN/2.0.0.2/data/uin/tags/items/general/swords.json)——剑
		- [weapons](https://raw.githubusercontent.com/ououn/UIN/2.0.0.2/data/uin/tags/items/general/weapons.json)——武器
		- [weighted_pressure_plates](https://raw.githubusercontent.com/ououn/UIN/2.0.0.2/data/uin/tags/items/general/weighted_pressure_plates.json)——测重压力板
	- **tech**
		- [all](https://raw.githubusercontent.com/ououn/UIN/2.0.0.2/data/uin/tags/items/tech/all.json)——所有物品


- 实体
	- **general**
		- [minecarts](https://raw.githubusercontent.com/ououn/UIN/2.0.0.2/data/uin/tags/entity_types/general/minecarts.json)——矿车
	- **tech**
		- [ages](https://raw.githubusercontent.com/ououn/UIN/2.0.0.2/data/uin/tags/entity_types/tech/ages.json)——随Age变化而改变形态/碰撞箱大小（不包括药水云、经验球、物品）
		- [all](https://raw.githubusercontent.com/ououn/UIN/2.0.0.2/data/uin/tags/entity_types/tech/all.json)——所有实体
		- [aquatic](https://raw.githubusercontent.com/ououn/UIN/2.0.0.2/data/uin/tags/entity_types/tech/aquatic.json)——海洋生物，受穿刺附魔伤害影响
		- [arthropods](https://raw.githubusercontent.com/ououn/UIN/2.0.0.2/data/uin/tags/entity_types/tech/arthropods.json)——节肢生物，受节肢杀手附魔影响
		- [blocks](https://raw.githubusercontent.com/ououn/UIN/2.0.0.2/data/uin/tags/entity_types/tech/blocks.json)——方块
		- [hostile](https://raw.githubusercontent.com/ououn/UIN/2.0.0.2/data/uin/tags/entity_types/tech/hostile.json)——敌对型生物
			- 鸡骑士、骷髅骑士、蜘蛛骑士、杀手兔没有单独id，故不在列表内
		- [items](https://raw.githubusercontent.com/ououn/UIN/2.0.0.2/data/uin/tags/entity_types/tech/items.json)——掉落物
		- [marker](https://raw.githubusercontent.com/ououn/UIN/2.0.0.2/data/uin/tags/entity_types/tech/marker.json)——盔甲架，药水云
		- [misc](https://raw.githubusercontent.com/ououn/UIN/2.0.0.2/data/uin/tags/entity_types/tech/misc.json)——杂项
		- [mobs](https://raw.githubusercontent.com/ououn/UIN/2.0.0.2/data/uin/tags/entity_types/tech/mobs.json)——所有生物（不包括玩家）
		- [neutral](https://raw.githubusercontent.com/ououn/UIN/2.0.0.2/data/uin/tags/entity_types/tech/neutral.json)——中立型生物
		- [non_mobs](https://raw.githubusercontent.com/ououn/UIN/2.0.0.2/data/uin/tags/entity_types/tech/non_mobs.json)——所有非生物实体
		- [passive](https://raw.githubusercontent.com/ououn/UIN/2.0.0.2/data/uin/tags/entity_types/tech/passive.json)——被动型生物
		- [projectiles](https://raw.githubusercontent.com/ououn/UIN/2.0.0.2/data/uin/tags/entity_types/tech/projectiles.json)——弹射物
		- [tameable](https://raw.githubusercontent.com/ououn/UIN/2.0.0.2/data/uin/tags/entity_types/tech/tameable.json)——可驯服类型
		- [undead](https://raw.githubusercontent.com/ououn/UIN/2.0.0.2/data/uin/tags/entity_types/tech/undead.json)——不死生物，获得恢复效果时受伤
		- [vehicles](https://raw.githubusercontent.com/ououn/UIN/2.0.0.2/data/uin/tags/entity_types/tech/vehicles.json)——载具，船 & 矿车
	- **custom**
		- [graveborn](https://raw.githubusercontent.com/ououn/UIN/2.0.0.2/data/uin/tags/entity_types/custom/graveborn.json)——亡灵类



***
# 特别感谢以下大佬的贡献
- [kongbaiyo](https://www.mcbbs.net/?574210)
- [SPGoding](https://www.mcbbs.net/?2444378)
- [Teenager_Yang](https://www.mcbbs.net/?2337994)
- [CR_019](https://www.mcbbs.net/?2504275)

# 特别感谢以下大佬的支持
- [Sunny_loy_KyLe](https://www.mcbbs.net/?1235427)
- [MCSugar_cane](https://www.mcbbs.net/?2176760)
- [BlackCB](https://www.mcbbs.net/?1367981)
