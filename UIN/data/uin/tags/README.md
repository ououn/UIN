# 当前版本——19w14b (1.14.4)
**若以下内容与实际情况有出入，或漏标了几个。请联系我以便即时修正，感谢*

***


# 未来版本/备注


- 方块
    - 可能成为实体方块
        - 制箭台(minecraft:fletching_table)
        - 铁匠台(minecraft:smithing_table)

    - 可能成为非实体方块
        - 床(#minecraft:beds)


- 物品


- 实体
	- 巨人(minecraft:giant)因没有AI，暂归类为passive
	- 铁傀儡/雪傀儡，情况特殊，不纳入主三类


***


# 快照变动
**临时列表，正式版出来后放入*

- 方块
	- **block_all**
		- bee_hive	19w34a
		- bee_nest	19w34a
	- **block_entities**
		- bee_hive  19w34a
		- bee_nest  19w34a


- 物品
	- **item_all**
		- bee_hive	19w34a
		- bee_nest	19w34a
		- bee_spawn_egg	19w34a
		- honey_bottle	19w34a
		- honeycomb	19w34a


- 实体
	- **neutral**
		- bee	19w34a


***


# TODO
*优先度由上至下，若有其他标签请求可在论坛内[回复/私信本人](https://www.mcbbs.net/?725858)。实用、技术性的标签优先
也可以写完后pull过来，验证过后合并*

*存在部分争议的标签考虑移动到custom下，争议过大的标签将取消制作*

**谢谢各位的支持！**


- 方块
    - 透光方块
    - 完全穿透类方块——既不影响/阻碍实体碰撞箱经过，如箭、雪球。但自身的碰撞箱会阻碍玩家右键，如高草、藤曼
    - 非完整方块——铁砧、门、耕地、半砖...
    - 占据两格的方块——如床，大箱子等


- 物品
    - 可右键物品


- 实体
	- 所有生物
	- 非生物实体——area_effect_cloud,item,evoker_fangs,etc.
	- 所有实体


***


# 已制作

- 方块
    - **general**
        - [chests](https://raw.githubusercontent.com/ououn/minecraft/master/UIN/data/uin/tags/blocks/general/chests.json)——储物箱
        - [command_blocks](https://raw.githubusercontent.com/ououn/minecraft/master/UIN/data/uin/tags/blocks/general/command_blocks.json)——命令方块
        - [fence_gates](https://raw.githubusercontent.com/ououn/minecraft/master/UIN/data/uin/tags/blocks/general/fence_gates.json)——栅栏门
        - [furnaces](https://raw.githubusercontent.com/ououn/minecraft/master/UIN/data/uin/tags/blocks/general/furnaces.json)——烤具
        - [pressure_plates](https://raw.githubusercontent.com/ououn/minecraft/master/UIN/data/uin/tags/blocks/general/pressure_plates.json)——压力板
        - [shulker_boxes](https://raw.githubusercontent.com/ououn/minecraft/master/UIN/data/uin/tags/blocks/general/shulker_boxes.json)——各色潜影盒
        - [skulls](https://raw.githubusercontent.com/ououn/minecraft/master/UIN/data/uin/tags/blocks/general/skulls.json)——头颅
        - [torches](https://raw.githubusercontent.com/ououn/minecraft/master/UIN/data/uin/tags/blocks/general/torches.json)——火把、红石火把
        - [weighted_pressure_plates](https://raw.githubusercontent.com/ououn/minecraft/master/UIN/data/uin/tags/blocks/general/weighted_pressure_plates.json)——测重压力板
    - **tech**
		- [block_all](https://raw.githubusercontent.com/ououn/minecraft/master/UIN/data/uin/tags/blocks/tech/block_all.json)——所有方块
        - [block_entities](https://raw.githubusercontent.com/ououn/minecraft/master/UIN/data/uin/tags/blocks/tech/block_entities.json)——实体方块
        - [light_emit](https://raw.githubusercontent.com/ououn/minecraft/master/UIN/data/uin/tags/blocks/tech/light_emit.json)——光源方块（包括可能成为光源的方块，如熔炉）（flowing_lava不是方块标签，而是流体标签）
        - [mechanism_components](https://raw.githubusercontent.com/ououn/minecraft/master/UIN/data/uin/tags/blocks/tech/mechanism_components.json)——机械元件
        - [power_components](https://raw.githubusercontent.com/ououn/minecraft/master/UIN/data/uin/tags/blocks/tech/power_components.json)——电源元件
        - [redstone_components](https://raw.githubusercontent.com/ououn/minecraft/master/UIN/data/uin/tags/blocks/tech/redstone_components.json)——红石元件
        - [transmission_components](https://raw.githubusercontent.com/ououn/minecraft/master/UIN/data/uin/tags/blocks/tech/transmission_components.json)——	传输元件


- 物品
	- **general**
	- **tech**
		- [item_all](https://raw.githubusercontent.com/ououn/minecraft/master/UIN/data/uin/tags/items/tech/item_all.json)——所有物品


- 实体
	- **general**(前三种类型尽量参考wiki)
		- [hostile](https://raw.githubusercontent.com/ououn/minecraft/master/UIN/data/uin/tags/entity_types/general/hostile.json)——敌对型生物
			- 鸡骑士、骷髅骑士、蜘蛛骑士、杀手兔没有单独id，故不在列表内
		- [neutral](https://raw.githubusercontent.com/ououn/minecraft/master/UIN/data/uin/tags/entity_types/general/neutral.json)——中立型生物
		- [passive](https://raw.githubusercontent.com/ououn/minecraft/master/UIN/data/uin/tags/entity_types/general/passive.json)——被动型生物
		- [tameable](https://raw.githubusercontent.com/ououn/minecraft/master/UIN/data/uin/tags/entity_types/general/tameable.json)——可驯服类型
		- [graveborn](https://raw.githubusercontent.com/ououn/minecraft/master/UIN/data/uin/tags/entity_types/general/graveborn.json)——亡灵类


***
# 特别感谢以下大佬的贡献
- [SPGoding](https://www.mcbbs.net/?2444378)
- [Teenager_Yang](https://www.mcbbs.net/?2337994)
