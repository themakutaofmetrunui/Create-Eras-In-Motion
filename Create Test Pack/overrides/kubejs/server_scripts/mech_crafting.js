ServerEvents.recipes(event => {
    //immersive aircraft
    event.recipes.createMechanicalCrafting('immersive_aircraft:heavy_crossbow', [
        'AABAA',
        'C A C',
        ' CAC ',
        '  A  ',
    ], {
        A: 'minecraft:stick',
        B: 'minecraft:tripwire_hook',
        C: '#forge:string'
    })
    event.recipes.createMechanicalCrafting('immersive_aircraft:airship', [
        'AAAAA',
        ' B B ',
        ' CDEF',
        ' CCC ',
    ], {
        A: 'immersive_aircraft:sail',
        B: '#forge:string',
        C: 'immersive_aircraft:hull',
        D: '#create:seats',
        E: 'immersive_aircraft:engine',
        F: 'immersive_aircraft:propeller',
    })
    event.recipes.createMechanicalCrafting('immersive_aircraft:biplane', [
        '   A ',
        'A  A ',
        'BBCDE',
        'A  A ',
        '   A ',
    ], {
        A: 'immersive_aircraft:sail',
        B: 'immersive_aircraft:hull',
        C: '#create:seats',
        D: 'immersive_aircraft:engine',
        E: 'immersive_aircraft:propeller',
    })
    event.recipes.createMechanicalCrafting('immersive_aircraft:warship', [
        'ABBBA',
        'ABBBA',
        ' C C ',
        'DAEFG',
        ' AAA ',
    ], {
        A: 'create:sturdy_sheet',
        B: 'immersive_aircraft:sail',
        C: '#forge:string',
        D: 'immersive_aircraft:heavy_crossbow',
        E: 'immersive_aircraft:cargo_airship',
        F: 'immersive_aircraft:engine',
        G: 'immersive_aircraft:propeller',
    })
    //create additions
    event.recipes.createMechanicalCrafting('createaddition:modular_accumulator', [
        'ABBBA',
        'ABCBA',
        'ABBBA',
    ], {
        A: 'create:brass_sheet',
        B: 'tfmg:accumulator',
        C: '#forge:wires/high_current'
    })
    //mekanism
    event.recipes.createMechanicalCrafting('mekanism:modification_station', [
        '  ABC ',
        'DEFGED',
        'HD  DH',
    ], {
        A: 'create:display_board',
        B: 'create:deployer',
        C: 'create:mechanical_arm',
        D: 'mekanism:hdpe_sheet',
        E: 'mekanism:ultimate_control_circuit',
        F: 'tfmg:electric_casing',
        G: 'tfmg:steel_casing',
        H: 'vintageimprovements:osmium_sheet'
    })
    event.recipes.createMechanicalCrafting('mekanism:digital_miner', [
        ' ABBA ',
        'CDEEDC',
        'CFGGFC',
    ], {
        A: 'mekanism:alloy_atomic',
        B: 'mekanism:teleportation_core',
        C: 'tfmg:steel_ingot',
        D: 'mekanism:logistical_sorter',
        E: 'tfmg:electric_casing',
        F: 'mekanism:ultimate_control_circuit',
        G: 'create:mechanical_drill'
    })
    event.recipes.createMechanicalCrafting('mekanism:atomic_disassembler', [
        'ABB ',
        'ACAA',
        ' D  ',
        ' E  ',
        ' E  ',
    ], {
        A: 'mekanism:alloy_atomic',
        B: 'mekanism:alloy_infused',
        C: 'mekanism:pellet_polonium',
        D: 'mekanism:energy_tablet',
        E: 'tfmg:rebar'
    })
    //mekanismgenerators
    event.recipes.createMechanicalCrafting('mekanismgenerators:advanced_solar_generator', [
        'ABA',
        'ABA',
        ' C ',
        ' C ',
        ' C ',
        'DDD',
    ], {
        A: 'mekanismgenerators:solar_generator',
        B: 'mekanism:alloy_infused',
        C: 'tfmg:steel_ingot',
        D: 'vintageimprovements:osmium_sheet'
    })
    event.recipes.createMechanicalCrafting('mekanismgenerators:wind_generator', [
        ' A ',
        ' B ',
        ' C ',
        ' C ',
        ' D ',
        'EFE',
    ], {
        A: 'immersive_aircraft:propeller',
        B: 'kubejs:magnetic_spool',
        C: 'mekanism:ingot_osmium',
        D: 'mekanism:alloy_infused',
        E: 'mekanism:energy_tablet',
        F: 'mekanism:basic_control_circuit'
    })
    //ad astra
    event.recipes.createMechanicalCrafting('ad_astra:nasa_workbench', [
        'ABCBA',
        ' DED ',
        ' DCD '
    ], {
        A: 'create:mechanical_arm',
        B: 'mekanism:advanced_control_circuit',
        C: 'ad_astra:desh_plate',
        D: 'tfmg:heavy_plate',
        E: 'tfmg:electric_casing'
    })
})