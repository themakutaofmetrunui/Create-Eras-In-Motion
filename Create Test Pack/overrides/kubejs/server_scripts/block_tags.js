ServerEvents.tags('block', event => {
    event.add('forge:storage_blocks/raw_tungsten', 'createloveandwar:raw_tungsten_block')
    event.add('forge:storage_blocks/raw_nickel', 'kubejs:block_raw_nickel')
    event.add('forge:storage_blocks/raw_lithium', 'kubejs:block_raw_lithium')
    const netherite_ore = ['mekanism:osmium_ore', 'mekanism:deepslate_osmium_ore', 'mekanism:block_raw_osmium', 'mekanism:block_osmium', 'mekanismaaa:glacio_osmium_ore', 'mekanismaaa:moon_osmium_ore', 'mekanismaaa:mercury_osmium_ore', 'mekanism:uranium_ore', 'mekanism:deepslate_uranium_ore', 'mekanism:block_raw_uranium', 'mekanism:block_uranium', 'mekanismaaa:glacio_uranium_ore', 'mekanismaaa:venus_uranium_ore', 'mekanismaaa:mercury_uranium_ore', 'mekanismaaa:mars_uranium_ore']
    for (let i = 0; i < netherite_ore.length; i++) {event.remove('minecraft:needs_stone_tool', netherite_ore[i])}
    for (let i = 0; i < netherite_ore.length; i++) {event.add('forge:needs_netherite_tool', netherite_ore[i])}
    event.add('forge:ores/sulfur', 'createloveandwar:sulphur_ore')
    event.add('forge:ores/sulfur', 'createloveandwar:nether_sulphur_ore')
    event.add('forge:ores/sulfur', 'createloveandwar:deepslate_sulphur_ore')
    event.add('forge:ores/tungsten', 'createloveandwar:deepslate_tungsten_ore')
    event.add('forge:storage_blocks', 'kubejs:block_raw_nickel')
    event.add('forge:storage_blocks', 'kubejs:block_raw_lithium')
    event.add('forge:storage_blocks', 'createloveandwar:raw_tungsten_block')
})
ServerEvents.tags('fluid', event => {
    event.add('forge:crude_oil', 'ad_astra:oil')
    event.removeAll('ad_astra:fuel')
    event.removeAll('ad_astra:tier_1_rover_fuel')
    event.add('ad_astra:fuel', 'ad_astra:cryo_fuel')
    event.add('ad_astra:fuel', 'ad_astra:fuel')
    event.add('ad_astra:tier_1_rover_fuel', 'tfmg:gasoline')
})