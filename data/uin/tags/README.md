**构件中数据包 UIN 标签分类 数据包——v2.0.2.1**

**适用于MC版本—— 1.16.2 rc1 ~ 1.18.2**

**稳定版数据包可在releases页面下载。也可直接在主页右上角按clone or download绿色按钮，下载当前构建中的未发布版本**

**方块/实体/物品文件夹下各有一份txt格式的包含所有id且不使用任何其他标签的标签文本，可单独使用**

**若以下内容与实际情况有出入，或漏标了几个。请联系我以便即时修正，感谢*


***

**更新日志**

[其他]
- 标签整理
- 新增物品标签
	- 燃料 tech/fuel
	- 可燃木板 tech/planks_that_burn
	- 可燃台阶 tech/slabs_that_burn
	- 可燃楼梯 tech/stairs_that_burn
	- 可燃踏板 tech/pressure_plates_that_burn
	- 可燃按钮 tech/buttons_that_burn
	- 可燃活门板 tech/trapdoors_that_burn
	- 可燃栅栏门 tech/fence_gates_that_burn
	- 可燃栅栏 tech/fences_that_burn
	- 可燃木门 tech/doors_that_burn
	- 可燃木牌 tech/signs_that_burn
- 新增方块标签
- 新增实体标签


***


<details>
<summary># 未来版本/个人备注</summary>

- 群系
	- 加入群系标签？
	- 所有群系（至1.18.2，共61群系） https://github.com/misode/mcmeta/blob/summary/registries/data.json#L14498
	- 温湿度分类（snowy, cold, temperate, warm, aquatic, cave, neutral, nether?, end?）https://minecraft.fandom.com/wiki/Biome#Biome_IDs
	- 维度分类?

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

</details>

***


<details>
<summary># TODO</summary>
*优先度由上至下，若有其他标签请求可在论坛内<a href="https://www.mcbbs.net/?725858" target="_blank">[回复/私信本人]</a>。实用、技术性的标签优先
<br>也可以写完后pull过来，验证过后合并*

<br>*存在部分争议的标签考虑移动到custom下，争议过大的标签将取消制作*

**谢谢各位的支持！**


- 方块
	- (同类方块标签化)
	- 非/常亮方块
	- 透光方块
	- 非完整方块——铁砧、门、耕地、半砖...
	- 占据两格的方块——如床，大箱子等


- 物品
	- (同类物品标签化)
	- 方块
	- 方块实体
	- 作物
	- 可右键物品


- 实体

</details>

***


# 已制作

<details>
<summary>方块</summary>
<br><h2>general</h2>
	<br><a href="https://raw.githubusercontent.com/ououn/UIN/master/data/uin/tags/blocks/general/amethyst.json" target="_blank">[amethyst]</a>——紫水晶
	<br><a href="https://raw.githubusercontent.com/ououn/UIN/master/data/uin/tags/blocks/general/amethyst_bud.json" target="_blank">[amethyst_bud]</a>——紫晶芽
	<br><a href="https://raw.githubusercontent.com/ououn/UIN/master/data/uin/tags/blocks/general/azaleas.json" target="_blank">[azaleas]</a>——杜鹃花丛
	<br><a href="https://raw.githubusercontent.com/ououn/UIN/master/data/uin/tags/blocks/general/chests.json" target="_blank">[chests]</a>——储物箱
	<br><a href="https://raw.githubusercontent.com/ououn/UIN/master/data/uin/tags/blocks/general/chiseled_stone.json" target="_blank">[chiseled_stone]</a>——錾制
	<br><a href="https://raw.githubusercontent.com/ououn/UIN/master/data/uin/tags/blocks/general/command_blocks.json" target="_blank">[command_blocks]</a>——命令方块
	<br><a href="https://raw.githubusercontent.com/ououn/UIN/master/data/uin/tags/blocks/general/concrete.json" target="_blank">[concrete]</a>——混凝土
	<br><a href="https://raw.githubusercontent.com/ououn/UIN/master/data/uin/tags/blocks/general/concrete_powder.json" target="_blank">[concrete_powder]</a>——混凝土粉末
	<br><a href="https://raw.githubusercontent.com/ououn/UIN/master/data/uin/tags/blocks/general/copper_blocks.json" target="_blank">[copper_blocks]</a>——铜块
	<br><a href="https://raw.githubusercontent.com/ououn/UIN/master/data/uin/tags/blocks/general/copper_cut.json" target="_blank">[copper_cut]</a>——切制铜块
	<br><a href="https://raw.githubusercontent.com/ououn/UIN/master/data/uin/tags/blocks/general/copper_exposed.json" target="_blank">[copper_exposed]</a>——斑驳铜块
	<br><a href="https://raw.githubusercontent.com/ououn/UIN/master/data/uin/tags/blocks/general/copper_oxidized.json" target="_blank">[copper_oxidized]</a>——氧化铜块
	<br><a href="https://raw.githubusercontent.com/ououn/UIN/master/data/uin/tags/blocks/general/copper_waxed.json" target="_blank">[copper_waxed]</a>——涂蜡铜块
	<br><a href="https://raw.githubusercontent.com/ououn/UIN/master/data/uin/tags/blocks/general/copper_weathered.json" target="_blank">[copper_weathered]</a>——锈蚀铜块
	<br><a href="https://raw.githubusercontent.com/ououn/UIN/master/data/uin/tags/blocks/general/cracked_stone.json" target="_blank">[cracked_stone]</a>——裂纹
	<br><a href="https://raw.githubusercontent.com/ououn/UIN/master/data/uin/tags/blocks/general/dead_coral_blocks.json" target="_blank">[dead_coral_blocks]</a>——失活的珊瑚块
	<br><a href="https://raw.githubusercontent.com/ououn/UIN/master/data/uin/tags/blocks/general/dead_coral_fans.json" target="_blank">[dead_coral_fans]</a>——失活的珊瑚扇
	<br><a href="https://raw.githubusercontent.com/ououn/UIN/master/data/uin/tags/blocks/general/dead_coral_wall_fans.json" target="_blank">[dead_coral_wall_fans]</a>——失活的墙上的珊瑚扇
	<br><a href="https://raw.githubusercontent.com/ououn/UIN/master/data/uin/tags/blocks/general/dead_corals.json" target="_blank">[dead_corals]</a>——失活的珊瑚
	<br><a href="https://raw.githubusercontent.com/ououn/UIN/master/data/uin/tags/blocks/general/deepslate_blocks.json" target="_blank">[deepslate_blocks]</a>——深层方块
	<br><a href="https://raw.githubusercontent.com/ououn/UIN/master/data/uin/tags/blocks/general/deepslate_ores.json" target="_blank">[deepslate_ores]</a>——深层矿
	<br><a href="https://raw.githubusercontent.com/ououn/UIN/master/data/uin/tags/blocks/general/dripleaf.json" target="_blank">[dripleaf]</a>——垂滴叶
	<br><a href="https://raw.githubusercontent.com/ououn/UIN/master/data/uin/tags/blocks/general/ferns.json" target="_blank">[ferns]</a>——蕨类
	<br><a href="https://raw.githubusercontent.com/ououn/UIN/master/data/uin/tags/blocks/general/fungus.json" target="_blank">[fungus]</a>——菌类
	<br><a href="https://raw.githubusercontent.com/ououn/UIN/master/data/uin/tags/blocks/general/furnaces.json" target="_blank">[furnaces]</a>——烤具
	<br><a href="https://raw.githubusercontent.com/ououn/UIN/master/data/uin/tags/blocks/general/gases.json" target="_blank">[gases]</a>——气体
	<br><a href="https://raw.githubusercontent.com/ououn/UIN/master/data/uin/tags/blocks/general/glass_blocks.json" target="_blank">[glass_blocks]</a>——玻璃
	<br><a href="https://raw.githubusercontent.com/ououn/UIN/master/data/uin/tags/blocks/general/glass_panes.json" target="_blank">[glass_panes]</a>——玻璃板
	<br><a href="https://raw.githubusercontent.com/ououn/UIN/master/data/uin/tags/blocks/general/grass.json" target="_blank">[grass]</a>——草丛
	<br><a href="https://raw.githubusercontent.com/ououn/UIN/master/data/uin/tags/blocks/general/ground_banners.json" target="_blank">[ground_banners]</a>——置地旗帜
	<br><a href="https://raw.githubusercontent.com/ououn/UIN/master/data/uin/tags/blocks/general/ground_skulls.json" target="_blank">[ground_skulls]</a>——置地头颅
	<br><a href="https://raw.githubusercontent.com/ououn/UIN/master/data/uin/tags/blocks/general/ground_torches.json" target="_blank">[ground_torches]</a>——置地火把
	<br><a href="https://raw.githubusercontent.com/ououn/UIN/master/data/uin/tags/blocks/general/infested.json" target="_blank">[infested]</a>——被虫蚀的方块
	<br><a href="https://raw.githubusercontent.com/ououn/UIN/master/data/uin/tags/blocks/general/lanterns.json" target="_blank">[lanterns]</a>——灯笼。灯笼和灵魂灯笼
	<br><a href="https://raw.githubusercontent.com/ououn/UIN/master/data/uin/tags/blocks/general/liquid.json" target="_blank">[liquid]</a>——液体
	<br><a href="https://raw.githubusercontent.com/ououn/UIN/master/data/uin/tags/blocks/general/mineral_blocks.json" target="_blank">[mineral_blocks]</a>——矿物块
	<br><a href="https://raw.githubusercontent.com/ououn/UIN/master/data/uin/tags/blocks/general/ores.json" target="_blank">[ores]</a>——原矿
	<br><a href="https://raw.githubusercontent.com/ououn/UIN/master/data/uin/tags/blocks/general/piston.json" target="_blank">[piston]</a>——活塞与其产物
	<br><a href="https://raw.githubusercontent.com/ououn/UIN/master/data/uin/tags/blocks/general/pumpkin_blocks.json" target="_blank">[pumpkin_blocks]</a>——南瓜，方块。南瓜，雕刻南瓜，南瓜灯
	<br><a href="https://raw.githubusercontent.com/ououn/UIN/master/data/uin/tags/blocks/general/raw_blocks.json" target="_blank">[raw_blocks]</a>——粗犷
	<br><a href="https://raw.githubusercontent.com/ououn/UIN/master/data/uin/tags/blocks/general/roots.json" target="_blank">[roots]</a>——菌素
	<br><a href="https://raw.githubusercontent.com/ououn/UIN/master/data/uin/tags/blocks/general/sandstones.json" target="_blank">[sandstones]</a>——砂岩
	<br><a href="https://raw.githubusercontent.com/ououn/UIN/master/data/uin/tags/blocks/general/seagrass.json" target="_blank">[seagrass]</a>——海草
	<br><a href="https://raw.githubusercontent.com/ououn/UIN/master/data/uin/tags/blocks/general/skulls.json" target="_blank">[skulls]</a>——头颅
	<br><a href="https://raw.githubusercontent.com/ououn/UIN/master/data/uin/tags/blocks/general/smooth_stone.json" target="_blank">[smooth_stone]</a>——平滑石类
	<br><a href="https://raw.githubusercontent.com/ououn/UIN/master/data/uin/tags/blocks/general/sponge.json" target="_blank">[sponge]</a>——海绵
	<br><a href="https://raw.githubusercontent.com/ououn/UIN/master/data/uin/tags/blocks/general/terracotta.json" target="_blank">[terracotta]</a>——陶瓦
	<br><a href="https://raw.githubusercontent.com/ououn/UIN/master/data/uin/tags/blocks/general/terracotta_glazed.json" target="_blank">[terracotta_glazed]</a>——带釉陶瓦
	<br><a href="https://raw.githubusercontent.com/ououn/UIN/master/data/uin/tags/blocks/general/torches.json" target="_blank">[torches]</a>——火把、红石火把
	<br><a href="https://raw.githubusercontent.com/ououn/UIN/master/data/uin/tags/blocks/general/vines.json" target="_blank">[vines]</a>——藤蔓
	<br><a href="https://raw.githubusercontent.com/ououn/UIN/master/data/uin/tags/blocks/general/wall_banners.json" target="_blank">[wall_banners]</a>——贴墙旗帜
	<br><a href="https://raw.githubusercontent.com/ououn/UIN/master/data/uin/tags/blocks/general/wall_skulls.json" target="_blank">[wall_skulls]</a>——墙上头颅
	<br><a href="https://raw.githubusercontent.com/ououn/UIN/master/data/uin/tags/blocks/general/wall_torches.json" target="_blank">[wall_torches]</a>——贴墙火把
	<br><a href="https://raw.githubusercontent.com/ououn/UIN/master/data/uin/tags/blocks/general/weighted_pressure_plates.json" target="_blank">[weighted_pressure_plates]</a>——测重压力板
<br><h2>tech</h2>
	<br><a href="https://raw.githubusercontent.com/ououn/UIN/master/data/uin/tags/blocks/tech/all.json" target="_blank">[all]</a>——所有方块
	<br><a href="https://raw.githubusercontent.com/ououn/UIN/master/data/uin/tags/blocks/tech/block_entities.json" target="_blank">[block_entities]</a>——方块实体
	<br><a href="https://raw.githubusercontent.com/ououn/UIN/master/data/uin/tags/blocks/tech/blockstate_none.json" target="_blank">[blockstate_none]</a>——无方块状态
	<br><a href="https://raw.githubusercontent.com/ououn/UIN/master/data/uin/tags/blocks/tech/components_mechanism.json" target="_blank">[components_mechanism]</a>——机械元件
	<br><a href="https://raw.githubusercontent.com/ououn/UIN/master/data/uin/tags/blocks/tech/components_power.json" target="_blank">[components_power]</a>——电源元件
	<br><a href="https://raw.githubusercontent.com/ououn/UIN/master/data/uin/tags/blocks/tech/components_redstone.json" target="_blank">[components_redstone]</a>——红石元件
	<br><a href="https://raw.githubusercontent.com/ououn/UIN/master/data/uin/tags/blocks/tech/components_transmission.json" target="_blank">[components_transmission]</a>——传输元件
	<br><a href="https://raw.githubusercontent.com/ououn/UIN/master/data/uin/tags/blocks/tech/damage.json" target="_blank">[damage]</a>——能造成伤害的方块（#campfires和sweet_berry_bush视方块状态而定，wither_rose则通过药水效果达成）
	<br><a href="https://raw.githubusercontent.com/ououn/UIN/master/data/uin/tags/blocks/tech/gravity_affected.json" target="_blank">[gravity_affected]</a>——重力影响
	<br><a href="https://raw.githubusercontent.com/ououn/UIN/master/data/uin/tags/blocks/tech/light_emit.json" target="_blank">[light_emit]</a>——光源方块（包括可能成为光源的方块，如熔炉）（flowing_lava不是方块标签，而是流体标签）
	<br><a href="https://raw.githubusercontent.com/ououn/UIN/master/data/uin/tags/blocks/tech/redstone_opaque.json" target="_blank">[redstone_opaque]</a>——不透明方块，能被红石充能
	<br><a href="https://raw.githubusercontent.com/ououn/UIN/master/data/uin/tags/blocks/tech/redstone_transparent.json" target="_blank">[redstone_transparent]</a>——透明方块，不能被红石充能（包括半砖，然而双半砖能被充能）
	<br><a href="https://raw.githubusercontent.com/ououn/UIN/master/data/uin/tags/blocks/tech/solid_full.json" target="_blank">[solid_full]</a>——完整固体方块。1x1x1碰撞箱。（不包括 灵魂沙、活塞、半砖、雪、潜影盒、蜂蜜块）
	<br><a href="https://raw.githubusercontent.com/ououn/UIN/master/data/uin/tags/blocks/tech/solid_none.json" target="_blank">[solid_none]</a>——非固体方块，完全不改变经过实体高度，完全不阻碍实体经过的方块（不包括 minecraft:snow）
	<br><a href="https://raw.githubusercontent.com/ououn/UIN/master/data/uin/tags/blocks/tech/store_item.json" target="_blank">[store_item]</a>——包含物品，能往存放物品的方块。
	- **tech/map**
	<br><a href="https://minecraft.fandom.com/wiki/Map_item_format" target="_blank">[地图颜色]</a>(https://github.com/ououn/UIN/tree/master/data/uin/tags/blocks/tech/map) uin:tech/map/0_none ~ 61_glow_lichen 由 Loy 提供技术支持 *原木取侧面色，床取床尾色。颜色见[Map Item Format]
<br><h2>tech/blockstates</h2>
	<br><a href="https://raw.githubusercontent.com/ououn/UIN/master/data/uin/tags/blocks/tech/blockstates/age.json" target="_blank">[age]</a>——年龄，植物生长的状态和火的传播状态等。可能的状态：0 ~ 25
	<br><a href="https://raw.githubusercontent.com/ououn/UIN/master/data/uin/tags/blocks/tech/blockstates/axis.json" target="_blank">[axis]</a>——轴。可能的状态：x，y，z
	<br><a href="https://raw.githubusercontent.com/ououn/UIN/master/data/uin/tags/blocks/tech/blockstates/distance.json" target="_blank">[distance]</a>——距离，距基础方块的距离。可能的状态：0 ~ 7
	<br><a href="https://raw.githubusercontent.com/ououn/UIN/master/data/uin/tags/blocks/tech/blockstates/down.json" target="_blank">[down]</a>——下方，方向。可能的状态：true，false
	<br><a href="https://raw.githubusercontent.com/ououn/UIN/master/data/uin/tags/blocks/tech/blockstates/east.json" target="_blank">[east]</a>——东方，方向。可能的状态：true，false，none，side，up
	<br><a href="https://raw.githubusercontent.com/ououn/UIN/master/data/uin/tags/blocks/tech/blockstates/face.json" target="_blank">[face]</a>——面向依附。可能的状态：ceiling，floor，wall
	<br><a href="https://raw.githubusercontent.com/ououn/UIN/master/data/uin/tags/blocks/tech/blockstates/facing.json" target="_blank">[facing]</a>——面向。包含以下可能的标签状态：nsweud，nswed，nswe
	<br><a href="https://raw.githubusercontent.com/ououn/UIN/master/data/uin/tags/blocks/tech/blockstates/facing_nswe.json" target="_blank">[facing_nswe]</a>——面向。可能的状态：north，south，west，east
	<br><a href="https://raw.githubusercontent.com/ououn/UIN/master/data/uin/tags/blocks/tech/blockstates/facing_nswed.json" target="_blank">[facing_nswed]</a>——面向。可能的状态：north，south，west，east，down
	<br><a href="https://raw.githubusercontent.com/ououn/UIN/master/data/uin/tags/blocks/tech/blockstates/facing_nsweud.json" target="_blank">[facing_nsweud]</a>——面向。可能的状态：north，south，west，east，up，down
	<br><a href="https://raw.githubusercontent.com/ououn/UIN/master/data/uin/tags/blocks/tech/blockstates/half.json" target="_blank">[half]</a>——半格。可能的状态：lower，upper，bottom，top
	<br><a href="https://raw.githubusercontent.com/ououn/UIN/master/data/uin/tags/blocks/tech/blockstates/have_item.json" target="_blank">[have_item]</a>——持物。包含了炼药台、讲台和唱片盒的5个has_xxx方块状态，可能的状态：true，false
	<br><a href="https://raw.githubusercontent.com/ououn/UIN/master/data/uin/tags/blocks/tech/blockstates/level.json" target="_blank">[level]</a>——水平。可能的状态：0 ~ 15
	<br><a href="https://raw.githubusercontent.com/ououn/UIN/master/data/uin/tags/blocks/tech/blockstates/lit.json" target="_blank">[lit]</a>——发光...是否处于发亮状态，影响光照等级。可能的状态：true，false
	<br><a href="https://raw.githubusercontent.com/ououn/UIN/master/data/uin/tags/blocks/tech/blockstates/north.json" target="_blank">[north]</a>——北方，方向。可能的状态：true，false，none，side，up
	<br><a href="https://raw.githubusercontent.com/ououn/UIN/master/data/uin/tags/blocks/tech/blockstates/open.json" target="_blank">[open]</a>——打开，存在于门与木桶。可能的状态：true，false
	<br><a href="https://raw.githubusercontent.com/ououn/UIN/master/data/uin/tags/blocks/tech/blockstates/power.json" target="_blank">[power]</a>——红石信号，传输的红石信号等级。可能的状态：0 ~ 15
	<br><a href="https://raw.githubusercontent.com/ououn/UIN/master/data/uin/tags/blocks/tech/blockstates/powered.json" target="_blank">[powered]</a>——红石充能，红石元件是否处于充能状态。可能的状态：true，false
	<br><a href="https://raw.githubusercontent.com/ououn/UIN/master/data/uin/tags/blocks/tech/blockstates/rotation.json" target="_blank">[rotation]</a>——旋转，存在于置地木牌、头颅和旗帜。可能的状态：0 ~ 15
	<br><a href="https://raw.githubusercontent.com/ououn/UIN/master/data/uin/tags/blocks/tech/blockstates/shape.json" target="_blank">[shape]</a>——连接，铁轨与楼梯的形状。可能的状态：ascending_north，ascending_south，ascending_west，ascending_east，east_west，north_south，north_east，north_west，south_east，south_west，inner_left，inner_right，outer_left，outer_right，straight
	<br><a href="https://raw.githubusercontent.com/ououn/UIN/master/data/uin/tags/blocks/tech/blockstates/snowy.json" target="_blank">[snowy]</a>——雪层。可能的状态：true，false
	<br><a href="https://raw.githubusercontent.com/ououn/UIN/master/data/uin/tags/blocks/tech/blockstates/south.json" target="_blank">[south]</a>——南方，方向。可能的状态：true，false，none，side，up
	<br><a href="https://raw.githubusercontent.com/ououn/UIN/master/data/uin/tags/blocks/tech/blockstates/stage.json" target="_blank">[stage]</a>——阶段，存在于树苗和竹子。可能的状态：0 ~ 1
	<br><a href="https://raw.githubusercontent.com/ououn/UIN/master/data/uin/tags/blocks/tech/blockstates/triggered.json" target="_blank">[triggered]</a>——触发，存在于发射器和投射器。可能的状态：true，false
	<br><a href="https://raw.githubusercontent.com/ououn/UIN/master/data/uin/tags/blocks/tech/blockstates/type.json" target="_blank">[type]</a>——类型。存在于活塞、箱子和半砖。可能的状态：normal，sticky，left，right，single，bottom，double，top
	<br><a href="https://raw.githubusercontent.com/ououn/UIN/master/data/uin/tags/blocks/tech/blockstates/up.json" target="_blank">[up]</a>——上方，方向。可能的状态：true，false
	<br><a href="https://raw.githubusercontent.com/ououn/UIN/master/data/uin/tags/blocks/tech/blockstates/waterlogged.json" target="_blank">[waterlogged]</a>——含水方块，状态可为含水或不含水的方块。可能的状态：true，false
	<br><a href="https://raw.githubusercontent.com/ououn/UIN/master/data/uin/tags/blocks/tech/blockstates/west.json" target="_blank">[west]</a>——西方，方向。可能的状态：true，false，none，side，up

</details>


<details>
<summary>物品</summary>
<br><h2>general</h2>
	<br><a href="https://raw.githubusercontent.com/ououn/UIN/master/data/uin/tags/items/general/armors.json" target="_blank">[armors]</a>——盔甲
	<br><a href="https://raw.githubusercontent.com/ououn/UIN/master/data/uin/tags/items/general/axes.json" target="_blank">[axes]</a>——斧子
	<br><a href="https://raw.githubusercontent.com/ououn/UIN/master/data/uin/tags/items/general/banner_patterns.json" target="_blank">[banner_patterns]</a>——旗帜图案
	<br><a href="https://raw.githubusercontent.com/ououn/UIN/master/data/uin/tags/items/general/boots.json" target="_blank">[boots]</a>——靴子
	<br><a href="https://raw.githubusercontent.com/ououn/UIN/master/data/uin/tags/items/general/buckets.json" target="_blank">[buckets]</a>——桶
	<br><a href="https://raw.githubusercontent.com/ououn/UIN/master/data/uin/tags/items/general/command_blocks.json" target="_blank">[command_blocks]</a>——命令方块
	<br><a href="https://raw.githubusercontent.com/ououn/UIN/master/data/uin/tags/items/general/concrete.json" target="_blank">[concrete]</a>——混凝土
	<br><a href="https://raw.githubusercontent.com/ououn/UIN/master/data/uin/tags/items/general/concrete_powder.json" target="_blank">[concrete_powder]</a>——混凝土粉末
	<br><a href="https://raw.githubusercontent.com/ououn/UIN/master/data/uin/tags/items/general/chestplates.json" target="_blank">[chestplates]</a>——胸甲
	<br><a href="https://raw.githubusercontent.com/ououn/UIN/master/data/uin/tags/items/general/dye.json" target="_blank">[dye]</a>——染料
	<br><a href="https://raw.githubusercontent.com/ououn/UIN/master/data/uin/tags/items/general/fence_gates.json" target="_blank">[fence_gates]</a>——栅栏门
	<br><a href="https://raw.githubusercontent.com/ououn/UIN/master/data/uin/tags/items/general/fish_buckets.json" target="_blank">[fish_buckets]</a>——鱼桶
	<br><a href="https://raw.githubusercontent.com/ououn/UIN/master/data/uin/tags/items/general/fungus.json" target="_blank">[fungus]</a>——菌类
	<br><a href="https://raw.githubusercontent.com/ououn/UIN/master/data/uin/tags/items/general/glass_blocks.json" target="_blank">[glass_blocks]</a>——玻璃
	<br><a href="https://raw.githubusercontent.com/ououn/UIN/master/data/uin/tags/items/general/glass_panes.json" target="_blank">[glass_panes]</a>——玻璃板
	<br><a href="https://raw.githubusercontent.com/ououn/UIN/master/data/uin/tags/items/general/grass.json" target="_blank">[grass]</a>——草丛
	<br><a href="https://raw.githubusercontent.com/ououn/UIN/master/data/uin/tags/items/general/helmets.json" target="_blank">[helmets]</a>——头盔
	<br><a href="https://raw.githubusercontent.com/ououn/UIN/master/data/uin/tags/items/general/hoes.json" target="_blank">[hoes]</a>——锄头
	<br><a href="https://raw.githubusercontent.com/ououn/UIN/master/data/uin/tags/items/general/horse_armors.json" target="_blank">[horse_armors]</a>——马凯
	<br><a href="https://raw.githubusercontent.com/ououn/UIN/master/data/uin/tags/items/general/leggings.json" target="_blank">[leggings]</a>——护腿
	<br><a href="https://raw.githubusercontent.com/ououn/UIN/master/data/uin/tags/items/general/minecarts.json" target="_blank">[minecarts]</a>——矿车
	<br><a href="https://raw.githubusercontent.com/ououn/UIN/master/data/uin/tags/items/general/mineral_blocks.json" target="_blank">[mineral_blocks]</a>——矿物块
	<br><a href="https://raw.githubusercontent.com/ououn/UIN/master/data/uin/tags/items/general/minerals.json" target="_blank">[minerals]</a>——矿物
	<br><a href="https://raw.githubusercontent.com/ououn/UIN/master/data/uin/tags/items/general/ores.json" target="_blank">[ores]</a>——原矿。镶金黑石不被视为矿石
	<br><a href="https://raw.githubusercontent.com/ououn/UIN/master/data/uin/tags/items/general/pickaxes.json" target="_blank">[pickaxes]</a>——稿子
	<br><a href="https://raw.githubusercontent.com/ououn/UIN/master/data/uin/tags/items/general/potions.json" target="_blank">[potions]</a>——药水
	<br><a href="https://raw.githubusercontent.com/ououn/UIN/master/data/uin/tags/items/general/pressure_plates.json" target="_blank">[pressure_plates]</a>——压力板
	<br><a href="https://raw.githubusercontent.com/ououn/UIN/master/data/uin/tags/items/general/rods.json" target="_blank">[rods]</a>——钓竿
	<br><a href="https://raw.githubusercontent.com/ououn/UIN/master/data/uin/tags/items/general/roots.json" target="_blank">[roots]</a>——菌素
	<br><a href="https://raw.githubusercontent.com/ououn/UIN/master/data/uin/tags/items/general/shovels.json" target="_blank">[shovels]</a>——铲子
	<br><a href="https://raw.githubusercontent.com/ououn/UIN/master/data/uin/tags/items/general/shulker_boxes.json" target="_blank">[shulker_boxes]</a>——潜影盒
	<br><a href="https://raw.githubusercontent.com/ououn/UIN/master/data/uin/tags/items/general/skulls.json" target="_blank">[skulls]</a>——头颅
	<br><a href="https://raw.githubusercontent.com/ououn/UIN/master/data/uin/tags/items/general/smooth_stone.json" target="_blank">[smooth_stone]</a>——平滑石类
	<br><a href="https://raw.githubusercontent.com/ououn/UIN/master/data/uin/tags/items/general/soups.json" target="_blank">[soups]</a>——汤
	<br><a href="https://raw.githubusercontent.com/ououn/UIN/master/data/uin/tags/items/general/spawn_eggs.json" target="_blank">[spawn_eggs]</a>——刷怪蛋
	<br><a href="https://raw.githubusercontent.com/ououn/UIN/master/data/uin/tags/items/general/sponge.json" target="_blank">[sponge]</a>——海绵
	<br><a href="https://raw.githubusercontent.com/ououn/UIN/master/data/uin/tags/items/general/swords.json" target="_blank">[swords]</a>——剑
	<br><a href="https://raw.githubusercontent.com/ououn/UIN/master/data/uin/tags/items/general/terracotta.json" target="_blank">[terracotta]</a>——陶瓦
	<br><a href="https://raw.githubusercontent.com/ououn/UIN/master/data/uin/tags/items/general/terracotta_glazed.json" target="_blank">[terracotta_glazed]</a>——带釉陶瓦
	<br><a href="https://raw.githubusercontent.com/ououn/UIN/master/data/uin/tags/items/general/weapons.json" target="_blank">[weapons]</a>——武器
	<br><a href="https://raw.githubusercontent.com/ououn/UIN/master/data/uin/tags/items/general/weighted_pressure_plates.json" target="_blank">[weighted_pressure_plates]</a>——测重压力板
<br><h2>tech</h2>
	<br><a href="https://raw.githubusercontent.com/ououn/UIN/master/data/uin/tags/items/tech/all.json" target="_blank">[all]</a>——所有物品
	<br><a href="https://raw.githubusercontent.com/ououn/UIN/master/data/uin/tags/items/tech/buttons_that_burn.json" target="_blank">[buttons_that_burn]</a>——可燃按钮
	<br><a href="https://raw.githubusercontent.com/ououn/UIN/master/data/uin/tags/items/tech/doors_that_burn.json" target="_blank">[doors_that_burn]</a>——可燃木门
	<br><a href="https://raw.githubusercontent.com/ououn/UIN/master/data/uin/tags/items/tech/drinkable.json" target="_blank">[drinkable]</a>——可饮用
	<br><a href="https://raw.githubusercontent.com/ououn/UIN/master/data/uin/tags/items/tech/eatable.json" target="_blank">[eatable]</a>——可食用（不包括蛋糕，不能直接食用）
	<br><a href="https://raw.githubusercontent.com/ououn/UIN/master/data/uin/tags/items/tech/ench.json" target="_blank">[ench]</a>——附魔台可附魔物品
	<br><a href="https://raw.githubusercontent.com/ououn/UIN/master/data/uin/tags/items/tech/fence_gates_that_burn.json" target="_blank">[fence_gates_that_burn]</a>——可燃栅栏门
	<br><a href="https://raw.githubusercontent.com/ououn/UIN/master/data/uin/tags/items/tech/fences_that_burn.json" target="_blank">[fences_that_burn]</a>——可燃栅栏
	<br><a href="https://raw.githubusercontent.com/ououn/UIN/master/data/uin/tags/items/tech/fuel.json" target="_blank">[fuel]</a>——燃料
	<br><a href="https://raw.githubusercontent.com/ououn/UIN/master/data/uin/tags/items/tech/planks_that_burn.json" target="_blank">[planks_that_burn]</a>——可燃木板
	<br><a href="https://raw.githubusercontent.com/ououn/UIN/master/data/uin/tags/items/tech/pressure_plates_that_burn.json" target="_blank">[pressure_plates_that_burn]</a>——可燃踏板
	<br><a href="https://raw.githubusercontent.com/ououn/UIN/master/data/uin/tags/items/tech/signs_that_burn.json" target="_blank">[signs_that_burn]</a>——可燃木牌
	<br><a href="https://raw.githubusercontent.com/ououn/UIN/master/data/uin/tags/items/tech/slabs_that_burn.json" target="_blank">[slabs_that_burn]</a>——可燃台阶
	<br><a href="https://raw.githubusercontent.com/ououn/UIN/master/data/uin/tags/items/tech/stairs_that_burn.json" target="_blank">[stairs_that_burn]</a>——可燃楼梯
	<br><a href="https://raw.githubusercontent.com/ououn/UIN/master/data/uin/tags/items/tech/trapdoors_that_burn.json" target="_blank">[trapdoors_that_burn]</a>——可燃活板门
	<br><a href="https://raw.githubusercontent.com/ououn/UIN/master/data/uin/tags/items/tech/x_1.json" target="_blank">[x_1]</a>——最大叠堆数量 1（不包括air）
	<br><a href="https://raw.githubusercontent.com/ououn/UIN/master/data/uin/tags/items/tech/x_16.json" target="_blank">[x_16]</a>——最大叠堆数量 16（不包括air）
	<br><a href="https://raw.githubusercontent.com/ououn/UIN/master/data/uin/tags/items/tech/x_64.json" target="_blank">[x_64]</a>——最大叠堆数量 64（不包括air）
</details>


<details>
<summary>实体</summary>
<br><h2>general</h2>
	<br><a href="https://raw.githubusercontent.com/ououn/UIN/master/data/uin/tags/entity_types/general/illagers.json" target="_blank">[illagers]</a>——灾厄村民
	<br><a href="https://raw.githubusercontent.com/ououn/UIN/master/data/uin/tags/entity_types/general/item_frames.json" target="_blank">[item_frames]</a>——展示框
	<br><a href="https://raw.githubusercontent.com/ououn/UIN/master/data/uin/tags/entity_types/general/minecarts.json" target="_blank">[minecarts]</a>——矿车
	<br><a href="https://raw.githubusercontent.com/ououn/UIN/master/data/uin/tags/entity_types/general/spiders.json" target="_blank">[spiders]</a>——蜘蛛
<br><h2>tech</h2>
	<br><a href="https://raw.githubusercontent.com/ououn/UIN/master/data/uin/tags/entity_types/tech/ages.json" target="_blank">[ages]</a>——随Age变化而改变形态/碰撞箱大小（不包括药水云、经验球、物品）
	<br><a href="https://raw.githubusercontent.com/ououn/UIN/master/data/uin/tags/entity_types/tech/all.json" target="_blank">[all]</a>——所有实体
	<br><a href="https://raw.githubusercontent.com/ououn/UIN/master/data/uin/tags/entity_types/tech/aquatic.json" target="_blank">[aquatic]</a>——海洋生物，受穿刺附魔伤害影响
	<br><a href="https://raw.githubusercontent.com/ououn/UIN/master/data/uin/tags/entity_types/tech/arthropods.json" target="_blank">[arthropods]</a>——节肢生物，受节肢杀手附魔影响
	<br><a href="https://raw.githubusercontent.com/ououn/UIN/master/data/uin/tags/entity_types/tech/blocks.json" target="_blank">[blocks]</a>——方块
	<br><a href="https://raw.githubusercontent.com/ououn/UIN/master/data/uin/tags/entity_types/tech/hostile.json" target="_blank">[hostile]</a>——以玩家做区分标准，敌对型生物
			- 鸡骑士、骷髅骑士、蜘蛛骑士、杀手兔没有单独id，故不在列表内
	<br><a href="https://raw.githubusercontent.com/ououn/UIN/master/data/uin/tags/entity_types/tech/items.json" target="_blank">[items]</a>——掉落物
	<br><a href="https://raw.githubusercontent.com/ououn/UIN/master/data/uin/tags/entity_types/tech/marker.json" target="_blank">[marker]</a>——盔甲架，药水云
	<br><a href="https://raw.githubusercontent.com/ououn/UIN/master/data/uin/tags/entity_types/tech/misc.json" target="_blank">[misc]</a>——杂项
	<br><a href="https://raw.githubusercontent.com/ououn/UIN/master/data/uin/tags/entity_types/tech/mobs.json" target="_blank">[mobs]</a>——所有生物（不包括玩家）
	<br><a href="https://raw.githubusercontent.com/ououn/UIN/master/data/uin/tags/entity_types/tech/neutral.json" target="_blank">[neutral]</a>——以玩家做区分标准，中立型生物
	<br><a href="https://raw.githubusercontent.com/ououn/UIN/master/data/uin/tags/entity_types/tech/non_mobs.json" target="_blank">[non_mobs]</a>——所有非生物实体
	<br><a href="https://raw.githubusercontent.com/ououn/UIN/master/data/uin/tags/entity_types/tech/passive.json" target="_blank">[passive]</a>——以玩家做区分标准，被动型生物
	<br><a href="https://raw.githubusercontent.com/ououn/UIN/master/data/uin/tags/entity_types/tech/projectiles.json" target="_blank">[projectiles]</a>——弹射物
	<br><a href="https://raw.githubusercontent.com/ououn/UIN/master/data/uin/tags/entity_types/tech/tameable.json" target="_blank">[tameable]</a>——可驯服类型
	<br><a href="https://raw.githubusercontent.com/ououn/UIN/master/data/uin/tags/entity_types/tech/undead.json" target="_blank">[undead]</a>——不死生物，获得恢复效果时受伤
	<br><a href="https://raw.githubusercontent.com/ououn/UIN/master/data/uin/tags/entity_types/tech/vehicles.json" target="_blank">[vehicles]</a>——载具，船 & 矿车
<br><h2>custom</h2>
	<br><a href="https://raw.githubusercontent.com/ououn/UIN/master/data/uin/tags/entity_types/custom/graveborn.json" target="_blank">[graveborn]</a>——亡灵类
</details>



***
# 特别感谢以下大佬的贡献
<br><a href="https://www.mcbbs.net/?574210" target="_blank">[kongbaiyo]</a>
<br><a href="https://www.mcbbs.net/?2444378" target="_blank">[SPGoding]</a>
<br><a href="https://www.mcbbs.net/?2337994" target="_blank">[Teenager_Yang]</a>
<br><a href="https://www.mcbbs.net/?2504275" target="_blank">[CR_019]</a>
<br><a href="https://www.mcbbs.net/?894447" target="_blank">[底层咸鱼]</a>
<br><a href="https://www.mcbbs.net/?1235427" target="_blank">[Loy]</a>
