ServerEvents.recipes(event => {
    function blastsmelt(boutput, binput) {
        event.smelting(boutput, binput)
        event.blasting(boutput, binput)
    }
    //this function is just for items that are just one item surrounded by 4 of another
    function surround(output, coating, coatedItem) {
        event.shaped(output,
        [
            ' A ',
            'ABA',
            ' A '
        ], 
        {
            A: coating,
            B: coatedItem
        }) 
    }
    const dyes = ['white', 'red', 'orange', 'yellow', 'green', 'lime', 'light_blue', 'cyan', 'blue', 'purple', 'magenta', 'pink', 'light_gray', 'gray', 'brown', 'black']
    function dye(dyed_item, result_mod, result_item) {
        for (let i = 0; i < dyes.length; i++) {
        event.shapeless((result_mod + ':' + dyes[i] + '_' + result_item),
            [
                ('minecraft:' + dyes[i] + '_dye'),
                dyed_item
            ]
        )}
    }
    //create
    event.shapeless(
        Item.of('blue_dye', 2),
        [
            'mekanism:dust_lapis_lazuli'
        ]
    )
    //moreburners
    event.shaped(
        Item.of('moreburners:electric_burner', 1),
        [
            'ABA',
            'CDC',
            ' E '
        ],
        {
            A: 'tinted_glass',
            B: 'moreburners:copper_coil',
            C: 'tfmg:capacitor_',
            D: 'create:andesite_casing',
            E: 'create:empty_blaze_burner'
        }
    )
    //create dreams and desires
  
    //immersive aircraft
    surround('immersive_aircraft:propeller', 'create:iron_sheet', 'create:propeller')
    surround('immersive_aircraft:enhanced_propeller', 'create:brass_sheet', 'create:propeller')
    surround('immersive_aircraft:steel_boiler', 'tfmg:heavy_plate', 'immersive_aircraft:boiler')
    surround('immersive_aircraft:hull_reinforcement', 'create:iron_sheet', 'tfmg:heavy_plate')
    surround('immersive_aircraft:telescope', 'create:copper_sheet', 'minecraft:spyglass')
    surround('immersive_aircraft:bomb_bay', 'tfmg:heavy_plate', 'minecraft:dispenser')
    event.shaped(
        Item.of('immersive_aircraft:hull', 1),
        [
        'ABA',
        'CCC'
        ], 
        {
        A: 'create:andesite_alloy',
        B: 'create:super_glue',
        C: 'create:andesite_casing'
    }
    ).damageIngredient('create:super_glue', '3')
    event.shaped(
        Item.of('immersive_aircraft:sail', 1),
        [
            'ABA',
            'CCC',
            'ABA'
        ],
        {
            A: 'minecraft:stick',
            B: 'vintageimprovements:andesite_rod',
            C: '#minecraft:wool'
        }
    )
    event.shaped(
        Item.of('immersive_aircraft:boiler', 1),
        [
            'A',
            'B',
            'C'
        ],
        {
            A: 'create:copper_sheet',
            B: 'create:fluid_tank',
            C: 'minecraft:furnace'
        }
    )
    event.shaped(
        Item.of('immersive_aircraft:engine', 1),
        [
            ' A ',
            'BCB',
            'BDB'
        ],
        {
            A: 'create_dd:furnace_engine',
            B: 'create:copper_sheet',
            C: 'immersive_aircraft:boiler',
            D: 'create:precision_mechanism'
        }
    )
    event.shaped(
        Item.of('immersive_aircraft:improved_landing_gear', 1),
        [
            ' AA',
            ' AA',
            'B  '
        ],
        {
            A: 'minecraft:iron_nugget',
            B: 'create:belt_connector'
        }
    )
    event.shaped(
        Item.of('immersive_aircraft:nether_engine', 1),
        [
            'ABC'
        ],
        {
            A: 'create_dd:infernal_mechanism',
            B: 'immersive_aircraft:boiler',
            C: 'create:iron_sheet'
        }
    )
    event.shaped(
        Item.of('immersive_aircraft:eco_engine', 1),
        [
            'ABC'
        ],
        {
            A: 'create_dd:abstruse_mechanism',
            B: 'immersive_aircraft:boiler',
            C: 'create:iron_sheet'
        }
    )
    event.shaped(
        Item.of('immersive_aircraft:gyroscope', 1),
        [
            'A',
            'B'
        ],
        {
            A: 'create:electron_tube',
            B: 'minecraft:compass'
        }
    )
    event.shaped(
        Item.of('immersive_aircraft:gyrodyne', 1),
        [
            ' A ',
            'BCB',
            'DED'
        ],
        {
            A: 'immersive_aircraft:propeller',
            B: 'immersive_aircraft:sail',
            C: 'minecraft:stick',
            D: 'immersive_aircraft:hull',
            E: '#create:seats'
        }
    )
    event.shaped(
        Item.of('immersive_aircraft:rotary_cannon', 1),
        [
            ' AA',
            ' BA',
            'C  '
        ],
        {
            A: '#flansmod:barrel',
            B: 'minecraft:copper_block',
            C: 'minecraft:copper_ingot'
        }
    )
    event.shaped(
        Item.of('immersive_aircraft:cargo_airship', 1),
        [
            'ABA',
            'CDC',
            'C C'
        ],
        {
            A: 'immersive_aircraft:propeller',
            B: 'minecraft:copper_ingot',
            C: '#forge:chests/wooden',
            D: 'immersive_aircraft:airship'
        }
    )
    event.shaped(
        Item.of('kubejs:mini_engine', 1),
        [
            'A',
            'B',
            'C'
        ],
        {
            A: 'create:steam_engine',
            B: 'immersive_aircraft:boiler',
            C: 'create_dd:kinetic_mechanism'
        }
    )
    event.shaped(
        Item.of('immersive_aircraft:quadrocopter', 1),
        [
            'ABA',
            ' C ',
            'ADA'
        ],
        {
            A: 'create:propeller',
            B: 'create:andesite_casing',
            C: '#forge:string',
            D: 'kubejs:mini_engine'
        }
    )
    event.shapeless(
        Item.of('immersive_aircraft:sturdy_pipes', 1),
        [
            '2x create:iron_sheet',
            'create:fluid_pipe'
        ]
    )
    event.shapeless(
        Item.of('immersive_aircraft:industrial_gears', 1),
        [
            '2x tfmg:steel_cogwheel'
        ]
    )
    //create dreams n desires
    dye('tfmg:asphalt', 'create_dd', 'asphalt_block')
    event.stonecutting('create_dd:hazard_block', 'tfmg:asphalt')
    //create love and war
    dye('tfmg:plastic_block', 'createloveandwar', 'plastic')
    event.replaceInput(
        {input: 'createloveandwar:polymer_ingot'},
        'createloveandwar:polymer_ingot',
        'tfmg:plastic_sheet'
    )
    event.replaceInput(
        {input: 'createloveandwar:bitumen'},
        'createloveandwar:bitumen',
        'tfmg:asphalt'
    )
    event.replaceInput(
        {id: 'createloveandwar:scanner'},
        'redstone',
        '#refinedstorage:wireless_transmitter'
    )
    event.replaceInput(
        {id: 'createloveandwar:crafting/attachment_laser_scope'},
        'createloveandwar:redstone_circuit',
        'refinedstorage:basic_processor'
    )
    surround('createloveandwar:robot_dog_spawn_egg', 'bone', 'mekanism:robit')
    //create tfmg
    event.replaceInput(
        {input: 'createloveandwar:raw_sulphur'},
        'createloveandwar:raw_sulphur',
        'tfmg:sulfur_dust'
    )
    event.replaceInput(
        {input: 'tfmg:copper_wire'},
        'tfmg:copper_wire',
        'createaddition:copper_wire'
    )
    event.replaceOutput(
        {output: 'createloveandwar:raw_sulphur'},
        'createloveandwar:raw_sulphur',
        'tfmg:sulfur_dust'
    )
    event.replaceOutput(
        {output: 'vintageimprovements:copper_sulfate'},
        'vintageimprovements:copper_sulfate',
        'tfmg:copper_sulfate'
    )
    event.replaceInput(
        {input: 'tfmg:copper_cable'},
        'tfmg:copper_cable',
        'createaddition:copper_spool'
    )
    event.shapeless(
        Item.of('tfmg:steel_ingot', 1),
        [
            '9x mekanism:nugget_steel'
        ]
    )
    event.shapeless(
        Item.of('kubejs:block_raw_lithium', 1),
        [
            '9x tfmg:raw_lithium'
        ]
    )
    event.shapeless(
        Item.of('kubejs:block_raw_nickel', 1),
        [
            '9x tfmg:raw_nickel'
        ]
    )
    event.stonecutting('4x tfmg:light_blue_caution_block', 'tfmg:aluminum_ingot')
    //vintage improvements
    event.replaceInput(
        { id: 'vintageimprovements:craft/vacuum_chamber'},
        'create:andesite_casing',
        'create_dd:hydraulic_casing'
    )
    event.replaceInput(
        { id: 'vintageimprovements:craft/sulfur_item_to_nuggets'},
        'vintageimprovements:sulfur',
        'createloveandwar:sulphur'
    )
    event.replaceOutput(
        {id: 'vintageimprovements:craft/sulfur_nuggets_to_item'},
        'vintageimprovements:sulfur',
        'createloveandwar:sulphur'
    )
    //create additions
    event.replaceInput(
        { id: 'createaddition:mechanical_crafting/tesla_coil'},
        'createaddition:capacitor',
        'tfmg:capacitor_'
    )
    event.shaped(
        Item.of('createaddition:capacitor', 1),
        [
            'ABA',
            'CBC'
        ],
        {
            A: 'tfmg:plastic_sheet',
            B: 'refinedstorage:silicon',
            C: 'createaddition:copper_wire'
        }
    )
    event.shaped(
        Item.of('createaddition:spool', 14),
        [
            'A',
            'A'
        ],
        {
            A: 'tfmg:plastic_sheet'
        }
    )
    event.replaceInput(
        {input: 'createaddition:biomass'},
        'createaddition:biomass',
        'mekanism:bio_fuel'
    )
    //RF
    event.shaped(
        Item.of('refinedstorage:wrench', 1),
        [
            'A',
            'B',
            'C'
        ],
        {
            A: 'refinedstorage:basic_processor',
            B: 'create:wrench',
            C: 'refinedstorage:quartz_enriched_iron'
        }
    )
    event.shapeless(
        Item.of('kubejs:polysilicate_nugget', 9),
        [
            'kubejs:polysilicate_ingot'
        ]
    )
    event.shapeless(
        Item.of('kubejs:polysilicate_ingot', 1),
        [
            '9x kubejs:polysilicate_nugget'
        ]
    )
    event.replaceInput(
        {id: 'refinedstorage:wireless_transmitter'},
        'ender_pearl',
        'createteleporters:redstone_pearl'
    )
    //Create Teleporters
    event.replaceInput(
        { mod: 'createteleporters'},
        'createteleporters:advanced_part',
        'refinedstorage:advanced_processor'
    )
    //toms storage
    surround('toms_storage:ts.inventory_connector', 'create_connected:inventory_access_port', 'redstone')
    event.shaped(
        Item.of('toms_storage:ts.inventory_proxy', 1),
        [
            'A',
            'B'
        ],
        {
            A: 'create:brass_casing',
            B: 'create:chute'
        }
    )
    event.shaped(
        Item.of('toms_storage:ts.storage_terminal', 1),
        [
            ' A ',
            'BCB',
            ' D '
        ],
        {
            A: 'create:electron_tube',
            B: 'redstone',
            C: 'create:brass_casing',
            D: 'create:precision_mechanism'
        }
    )
    event.shapeless(
        Item.of('toms_storage:ts.crafting_terminal', 1),
        [
            'crafting_table',
            'toms_storage:ts.storage_terminal'
        ]
    )
    //backpacks
    event.shaped(
        Item.of('sophisticatedbackpacks:pickup_upgrade', 1),
        [
            ' A ',
            'ABA',
            ' C '
        ],
        {
            A: 'redstone',
            B: 'sophisticatedbackpacks:upgrade_base',
            C: 'create:chute'
        }
    )
    event.shaped(
        Item.of('sophisticatedbackpacks:battery_upgrade', 1),
        [
            'A',
            'B',
            'A'
        ],
        {
            A: 'tfmg:capacitor',
            B: 'sophisticatedbackpacks:upgrade_base'
        }
    )
    event.shaped(
        Item.of('sophisticatedbackpacks:advanced_pump_upgrade', 1),
        [
            'ABA',
            'CDC',
            'EEE'
        ],
        {
            A: 'diamond',
            B: 'create:spout',
            C: 'gold_ingot',
            D: 'sophisticatedbackpacks:pump_upgrade',
            E: 'redstone'
        }
    )
    event.shapeless(
        Item.of('sophisticatedbackpacks:filter_upgrade', 1),
        [
            'create:filter',
            'sophisticatedbackpacks:upgrade_base'
        ]
    )
    event.shapeless(
        Item.of('sophisticatedbackpacks:advanced_filter_upgrade', 1),
        [
            'create:attribute_filter',
            'sophisticatedbackpacks:filter_upgrade'
        ]
    )
    event.shapeless(
        Item.of('sophisticatedbackpacks:magnet_upgrade', 1),
        [
            'tfmg:magnetic_ingot',
            'sophisticatedbackpacks:pickup_upgrade'
        ]
    )
    event.shapeless(
        Item.of('sophisticatedbackpacks:advanced_magnet_upgrade', 1),
        [
            'tfmg:magnetic_ingot',
            'sophisticatedbackpacks:advanced_pickup_upgrade'
        ]
    )
    event.shapeless(
        Item.of('sophisticatedbackpacks:tank_upgrade', 1),
        [
            'sophisticatedbackpacks:upgrade_base',
            'create:fluid_tank'
        ]
    )
    event.shapeless(
        Item.of('sophisticatedbackpacks:pump_upgrade', 1),
        [
            'sophisticatedbackpacks:upgrade_base',
            'create:mechanical_pump'
        ]
    )
    //mekanism
    event.replaceInput(
        {id: 'mekanism:mekasuit_helmet'},
        'netherite_helmet',
        'ad_astra:netherite_space_helmet'
    )
    event.replaceInput(
        {id: 'mekanism:mekasuit_bodyarmor'},
        'netherite_chestplate',
        'ad_astra:netherite_space_suit'
    )
    event.replaceInput(
        {id: 'mekanism:mekasuit_boots'},
        'netherite_boots',
        'ad_astra:netherite_space_boots'
    )
    event.replaceInput(
        {id: 'mekanism:mekasuit_pants'},
        'netherite_leggings',
        'ad_astra:netherite_space_pants'
    )
    event.replaceInput(
        {id: 'mekanism:module_excavation_escalation_unit'},
        'iron_pickaxe',
        'create:mechanical_drill'
    )
    event.replaceInput(
        {id: 'mekanism:module_farming_unit'},
        'iron_hoe',
        'create:mechanical_harvester'
    )
    event.replaceInput(
        {id: 'mekanism:module_inhalation_purification_unit'},
        'mekanism:scuba_mask',
        'create:netherite_diving_helmet'
    )
    event.replaceInput(
        {id: 'mekanism:module_elytra_unit'},
        'mekanism:pellet_antimatter',
        'mekanism:alloy_atomic'
    )
    event.replaceInput(
        {id: 'mekanism:module_magnetic_attraction_unit'},
        'iron_bars',
        'tfmg:magnetic_ingot'
    )
    event.replaceInput(
        {id: 'mekanism:teleporter_frame'},
        'mekanism:ingot_refined_obsidian',
        'createteleporters:quantum_casing'
    )
    event.replaceInput(
        {id: 'mekanism:teleportation_core'},
        'diamond',
        'createteleporters:redstone_pearl'
    )
    event.replaceInput(
        {id: 'mekanism:superheating_element'},
        'mekanism:steel_casing',
        'tfmg:electric_casing'
    )
    event.replaceInput(
        {id: 'mekanism:energized_smelter'},
        '#forge:glass/silica',
        'furnace'
    )
    event.replaceInput(
        {id: 'mekanism:energized_smelter'},
        'mekanism:steel_casing',
        'tfmg:electric_casing'
    )
    event.replaceInput(
        {id: 'mekanism:metallurgic_infusing/alloy/infused'},
        'iron_ingot',
        'ad_astra:desh_ingot'
    )
    event.replaceInput(
        {id: 'mekanism:crusher'},
        'lava_bucket',
        'create:crushing_wheel'
    )
    event.replaceInput(
        {id: 'mekanism:crusher'},
        'mekanism:steel_casing',
        'tfmg:electric_casing'
    )
    event.replaceInput(
        {id: 'mekanism:painting_machine'},
        'mekanism:steel_casing',
        'tfmg:electric_casing'
    )
    event.replaceInput(
        {input: 'mekanism:dust_sulfur'},
        'mekanism:dust_sulfur',
        'tfmg:sulfur_dust'
    )
    event.replaceInput(
        {id: 'mekanism:electrolytic_core'},
        'mekanism:alloy_infused',
        'vintageimprovements:osmium_sheet'
    )
    event.replaceInput(
        {id: 'mekanism:pressure_disperser'},
        'mekanism:alloy_infused',
        'vintageimprovements:osmium_sheet'
    )
    event.replaceInput(
        {id: 'mekanismgenerators:generator/solar'},
        'mekanism:alloy_infused',
        'vintageimprovements:osmium_sheet'
    )
    event.replaceOutput(
        {output: 'mekanism:dust_sulfur'},
        'mekanism:dust_sulfur',
        'tfmg:sulfur_dust'
    )
    event.replaceInput(
        {id: 'mekanism:solar_neutron_activator'},
        'mekanism:steel_casing',
        'tfmg:electric_casing'
    )
    event.replaceInput(
        {id: 'mekanism:dimensional_stabilizer'},
        'diamond_block',
        'nether_star'
    )
    event.replaceInput(
        {id: 'mekanism:logistical_sorter'},
        'iron_ingot',
        'vintageimprovements:osmium_sheet'
    )
    event.replaceInput(
        {id: 'mekanism:security_desk'},
        'mekanism:steel_casing',
        'tfmg:electric_casing'
    )
    event.replaceInput(
        {id: 'mekanism:formulaic_assemblicator'},
        'mekanism:steel_casing',
        'tfmg:electric_casing'
    )
    event.replaceInput(
        {id: 'mekanism:antiprotonic_nucleosynthesizer'},
        'mekanism:steel_casing',
        'tfmg:electric_casing'
    )
    event.replaceInput(
        {id: 'mekanismgenerators:fission_reactor/port'},
        'mekanism:elite_control_circuit',
        'mekanism:advanced_control_circuit'
    )
    event.replaceInput(
        {id: 'mekanismgenerators:fission_reactor/control_rod_assembly'},
        'mekanism:elite_control_circuit',
        'mekanism:advanced_control_circuit'
    )
    event.replaceInput(
        {id: 'mekanism:security_desk'},
        'mekanism:teleportation_core',
        '#refinedstorage:wireless_transmitter'
    )
    event.replaceInput(
        {id: 'mekanismgenerators:reactor/port'},
        'mekanism:ultimate_control_circuit',
        'mekanism:elite_control_circuit'
    )
    event.replaceOutput(
        {output: 'mekanism:raw_lead'},
        'mekanism:raw_lead',
        'tfmg:raw_lead'
    )
    event.replaceOutput(
        {output: 'mekanism:ingot_lead'},
        'mekanism:ingot_lead',
        'tfmg:lead_ingot'
    )
    event.shaped(
        Item.of('mekanism:combiner', 1),
        [
            'ABA',
            'CDE',
            'ABA'
        ],
        {
            A: 'mekanism:alloy_infused',
            B: 'mekanism:advanced_control_circuit',
            C: 'create:mechanical_mixer',
            D: 'tfmg:electric_casing',
            E: 'create:deployer'
        }
    )
    event.shaped(
        Item.of('mekanismgenerators:heat_generator', 1),
        [
            'ABA',
            'ACA',
            'ADA'
        ],
        {
            A: 'vintageimprovements:osmium_sheet',
            B: 'kubejs:magnetic_spool',
            C: 'tfmg:turbine_blade',
            D: 'immersive_aircraft:nether_engine'
        }
    )
    event.shaped(
        Item.of('mekanism:metallurgic_infuser', 1),
        [
            'AEA',
            'BCB',
            'ADA'
        ],
        {
            A: 'redstone',
            B: 'refinedstorage:advanced_processor',
            C: 'tfmg:electric_casing',
            D: 'tfmg:blast_furnace_output',
            E: 'tfmg:steel_ingot'
        }
    )
    event.shaped(
        Item.of('mekanism:basic_mechanical_pipe', 8),
        [
            'ABA'
        ],
        {
            A: 'vintageimprovements:osmium_sheet',
            B: 'tfmg:electric_pump'
        }
    )
    event.shaped(
        Item.of('mekanism:basic_universal_cable', 16),
        [
            'A',
            'B',
            'A'
        ],
        {
            A: 'vintageimprovements:osmium_sheet',
            B: 'kubejs:magnetic_spool'
        }
    )
    event.shaped(
        Item.of('mekanism:basic_pressurized_tube', 8),
        [
            'ABA'
        ],
        {
            A: 'vintageimprovements:osmium_sheet',
            B: 'glass'
        }
    )
    event.shaped(
        Item.of('mekanism:basic_logistical_transporter', 8),
        [
            'ABA'
        ],
        {
           A: 'vintageimprovements:osmium_sheet',
           B: 'mekanism:basic_control_circuit'
        }
    )
    event.shaped(
        Item.of('mekanism:basic_thermodynamic_conductor', 8),
        [
            'ABA'
        ],
        {
            A: 'vintageimprovements:osmium_sheet',
            B: 'copper_ingot'
        }
    )
    event.shaped(
        Item.of('mekanism:energy_tablet', 1),
        [
            'ABA',
            'CDC',
            'ABA'
        ],
        {
            A: 'createteleporters:redstone_pearl',
            B: 'tfmg:capacitor',
            C: 'mekanism:alloy_infused',
            D: 'tfmg:accumulator'
        }
    )
    event.shaped(
        Item.of('mekanism:basic_energy_cube', 1),
        [
            'ABA',
            'CDC',
            'ABA'
        ],
        {
            A: 'vintageimprovements:osmium_sheet',
            B: 'mekanism:energy_tablet',
            C: 'createteleporters:redstone_pearl',
            D: 'createteleporters:quantum_mechanism'
        }
    )
    event.shaped(
        Item.of('mekanism:advanced_energy_cube', 1),
        [
            'ABA',
            'CDC',
            'ABA'
        ],
        {
            A: 'mekanism:alloy_infused',
            B: 'mekanism:energy_tablet',
            C: 'vintageimprovements:osmium_sheet',
            D: 'mekanism:basic_energy_cube'
        }
    )
    event.shaped(
        Item.of('mekanism:basic_chemical_tank', 1),
        [
            'ABA',
            'BCB',
            'ABA'
        ],
        {
            A: 'vintageimprovements:osmium_sheet',
            B: 'tfmg:steel_fluid_tank',
            C: 'createteleporters:quantum_mechanism'
        }
    )
    event.shaped(
        Item.of('mekanism:advanced_chemical_tank', 1),
        [
            'ABA',
            'BCB',
            'ABA'
        ],
        {
            A: 'mekanism:alloy_infused',
            B: 'vintageimprovements:osmium_sheet',
            C: 'mekanism:basic_chemical_tank'
        }
    )
    event.shaped(
        Item.of('mekanism:basic_fluid_tank', 1),
        [
            'ABA',
            'BCB',
            'ABA'
        ],
        {
            A: 'vintageimprovements:osmium_sheet',
            B: 'create:fluid_tank',
            C: 'createteleporters:quantum_mechanism'
        }
    )
    event.shaped(
        Item.of('mekanism:advanced_fluid_tank', 1),
        [
            'ABA',
            'BCB',
            'ABA'
        ],
        {
            A: 'mekanism:alloy_infused',
            B: 'vintageimprovements:osmium_sheet',
            C: 'mekanism:basic_fluid_tank'
        }
    )
    event.shaped(
        Item.of('mekanism:configurator', 1),
        [
            ' A ',
            'BCB',
            ' D '
        ],
        {
            A: 'mekanism:advanced_control_circuit',
            B: 'tfmg:capacitor_',
            C: 'create:wrench',
            D: 'vintageimprovements:osmium_sheet'
        }
    )
    event.shaped(
        Item.of('mekanism:enrichment_chamber', 1),
        [
            'ABA',
            'CDC',
            'AEA'
        ],
        {
            A: 'redstone',
            B: 'tfmg:steel_ingot',
            C: 'mekanism:basic_control_circuit',
            D: 'tfmg:electric_casing',
            E: 'enchanting_table'
        }
    )
    event.shaped(
        Item.of('mekanism:precision_sawmill', 1),
        [
            'ABA',
            'BCB',
            'DED'
        ],
        {
            A: 'tfmg:heavy_plate',
            B: 'redstone',
            C: 'tfmg:electric_casing',
            D: 'mekanism:basic_control_circuit',
            E: 'create:mechanical_saw'
        }
    )
    event.shaped(
        Item.of('mekanism:osmium_compressor', 1),
        [
            'ABA',
            'CDC',
            'AEA'
        ],
        {
            A: 'mekanism:alloy_infused',
            B: 'vintageimprovements:vacuum_chamber',
            C: 'mekanism:advanced_control_circuit',
            D: 'tfmg:electric_casing',
            E: 'create_dd:hydraulic_casing'
        }
    )
    event.shaped(
        Item.of('mekanism:purification_chamber', 1),
        [
            'ABA',
            'CDC',
            'ABA'
        ],
        {
            A: 'mekanism:alloy_infused',
            B: 'mekanism:advanced_control_circuit',
            C: 'brewing_stand',
            D: 'tfmg:electric_casing'
        }
    )
    event.shaped(
        Item.of('mekanism:chemical_injection_chamber', 1),
        [
            'ABA',
            'CDC',
            'AEA'
        ],
        {
            A: 'mekanism:alloy_reinforced',
            B: 'create:spout',
            C: 'mekanism:elite_control_circuit',
            D: 'tfmg:electric_casing',
            E: 'mekanism:basic_chemical_tank'
        }
    )
    const machinetype = ["infusing", "enriching", "crushing", "combining", "smelting", "sawing", "compressing", "purifying", "injecting"]
    const machine = ["metallurgic_infuser", "enrichment_chamber", "crusher", "combiner", "energized_smelter", "precision_sawmill", "osmium_compressor", "purification_chamber", "chemical_injection_chamber"]
    const tier = ["advanced", "elite", "ultimate"]
    const tierdown = ['basic', 'advanced', 'elite']
    const alloy = ["mekanism:alloy_infused", "mekanism:alloy_reinforced", "mekanism:alloy_atomic"]
    for (let i = 0; i < machine.length; i++) {
        event.remove({output: 'mekanism:basic_' + machinetype[i] + '_factory'})
        for (let j = 0; j < tier.length; j++) {
            event.remove({output: 'mekanism:' + tier[j] + '_' + machinetype[i] + '_factory'})
        }
    }
    for (let i = 0; i < machine.length; i++) {
        for (let j = 0; j < tier.length; j++) {
            event.shaped(
                Item.of('mekanism:' + tier[j] + '_' + machinetype[i] + '_factory', 1),
                [
                    'ABA',
                    'ADA',
                    'ABA'
                ],
                {
                    A: alloy[j],
                    B: 'mekanism:' + tier[j] + '_control_circuit',
                    D: 'mekanism:' + tierdown[j] + '_' + machinetype[i] + '_factory'
                }
            )
        }
    }
    for (let i = 0; i < machine.length; i++) {
        event.shaped(
            Item.of('mekanism:basic_' + machinetype[i] + '_factory', 1),
            [
                'ABA',
                'ACA',
                'ABA'
            ],
            {
                A: 'redstone',
                B: 'mekanism:basic_control_circuit',
                C: 'mekanism:' + machine[i],
            }
        )
    }
    const ignot = ['mekanism:ingot_osmium', 'gold_ingot', 'diamond', 'iron_ingot']
    tier.push('basic')
    alloy.push('redstone')
    for (let i = 0; i < tier.length; i++) {
        event.replaceInput(
            {id: 'mekanism:tier_installer/' + tier[i]},
            ignot[i],
            alloy[i]
        )
    }
    event.shaped(
        Item.of('mekanism:pigment_extractor', 1),
        [
            'ABA',
            'CDC',
            'AEA'
        ],
        {
            A: 'redstone',
            B: 'vintageimprovements:centrifuge',
            C: 'mekanism:basic_control_circuit',
            D: 'tfmg:electric_casing',
            E: 'create:mechanical_drill'
        }
    )
    event.shaped(
        Item.of('mekanism:pigment_mixer', 1),
        [
            'ABA',
            'CDC',
            'AEA'
        ],
        {
            A: 'mekanism:alloinfused',
            B: 'create:mechanical_mixer',
            C: 'mekanism:advanced_control_circuit',
            D: 'tfmg:electric_casing',
            E: 'mekanism:hdpe_rod'
        }
    )
    event.shaped(
        Item.of('mekanism:fluidic_plenisher', 1),
        [
            'AAA',
            'BCB',
            'AAA'
        ],
        {
            A: 'mekanism:ingot_tin',
            B: 'mekanism:basic_control_circuit',
            C: 'tfmg:electric_pump'
        }
    )
    event.shaped(
        Item.of('mekanism:chemical_infuser', 1),
        [
            'ABA',
            'CDC',
            'ABA'
        ],
        {
            A: 'mekanism:alloy_infused',
            B: 'mekanism:basic_control_circuit',
            C: 'mekanism:basic_chemical_tank',
            D: 'tfmg:electric_casing'
        }
    )
    event.shaped(
        Item.of('mekanism:resistive_heater', 1),
        [
            'ABA',
            'CDC',
            'AEA'
        ],
        {
            A: 'redstone',
            B: 'moreburners:electric_burner',
            C: 'moreburners:nickel_coil',
            D: 'tfmg:electric_casing',
            E: 'tfmg:steel_ingot'
        }
    )
    event.shaped(
        Item.of('mekanism:fuelwood_heater', 1),
        [
            'AAA',
            'BCB',
            'DDD'
        ],
        {
            A: 'moreburners:nickel_coil',
            B: 'furnace',
            C: 'tfmg:electric_casing',
            D: 'tfmg:steel_ingot'
        }
    )
    event.shaped(
        Item.of('mekanism:nutritional_liquifier', 1),
        [
            'ABA',
            'CDC',
            'AEA'
        ],
        {
            A: 'redstone',
            B: 'glass',
            C: 'mekanism:basic_control_circuit',
            D: 'tfmg:electric_casing',
            E: 'create:propeller'
        }
    )
    event.shaped(
        Item.of('mekanism:chemical_dissolution_chamber', 1),
        [
            'ABA',
            'CDC',
            'ABA'
        ],
        {
            A: 'mekanism:ingot_refined_obsidian',
            B: 'mekanism:basic_chemical_tank',
            C: 'mekanism:advanced_control_circuit',
            D: 'tfmg:electric_casing'
        }
    )
    event.shaped(
        Item.of('mekanism:chemical_washer', 1),
        [
            'ABA',
            'CDC',
            'EFE'
        ],
        {
            A: 'create:fluid_tank',
            B: 'create:spout',
            C: 'mekanism:ultimate_control_circuit',
            D: 'tfmg:electric_casing',
            E: 'mekanism:ingot_refined_obsidian',
            F: 'mekanism:basic_chemical_tank'
        }
    )
    event.shaped(
        Item.of('mekanism:chemical_crystallizer', 1),
        [
            'ABA',
            'CDC',
            'AEA'
        ],
        {
            A: 'mekanism:ingot_refined_obsidian',
            B: 'tfmg:casting_spout',
            C: 'mekanism:ultimate_control_circuit',
            D: 'tfmg:electric_casing',
            E: 'tfmg:casting_basin'
        }
    )
    event.shaped(
        Item.of('mekanism:seismic_vibrator', 1),
        [
            'ABA',
            'CDC',
            'AAA'
        ],
        {
            A: 'mekanism:ingot_tin',
            B: 'tfmg:surface_scanner',
            C: 'mekanism:basic_control_circuit',
            D: 'tfmg:electric_casing'
        }
    )
    event.shaped(
        Item.of('mekanism:isotopic_centrifuge', 1),
        [
            'ABA',
            'CAC',
            'ADA'
        ],
        {
            A: 'tfmg:lead_ingot',
            B: 'mekanism:basic_chemical_tank',
            C: 'mekanism:advanced_control_circuit',
            D: 'vintageimprovements:centrifuge'
        }
    )
    event.shaped(
        Item.of('mekanism:electrolytic_separator', 1),
        [
            'ABA',
            'CDC',
            'EFE'
        ],
        {
            A: 'tfmg:steel_fluid_tank',
            B: 'mekanism:electrolytic_core',
            C: 'tfmg:heavy_plate',
            D: 'tfmg:electric_casing',
            E: 'tfmg:steel_ingot',
            F: 'redstone'
        }
    )
    event.shaped(
        Item.of('mekanism:seismic_reader', 1),
        [
            'ABA',
            'ACA',
            'AAA'
        ],
        {
            A: 'tfmg:steel_ingot',
            B: 'tfmg:surface_scanner',
            C: 'mekanism:energy_tablet'
        }
    )
    event.shaped(
        Item.of('mekanism:laser', 1),
        [
            'AB ',
            'ACD',
            'AB '
        ],
        {
            A: 'mekanism:alloy_reinforced',
            B: 'mekanism:energy_tablet',
            C: 'tfmg:electric_casing',
            D: 'diamond'
        }
    )
    event.shaped(
        Item.of('mekanism:basic_bin', 1),
        [
            'ABA',
            'CDC',
            'AAA'
        ],
        {
            A: 'vintageimprovements:osmium_sheet',
            B: 'mekanism:basic_control_circuit',
            C: 'redstone',
            D: 'create:item_vault'
        }
    )
    event.shaped(
        Item.of('mekanism:dynamic_tank', 1),
        [
            'A',
            'B',
            'A'
        ],
        {
            A: 'vintageimprovements:osmium_sheet',
            B: 'barrel'
        }
    )
    event.shaped(
        Item.of('mekanism:thermal_evaporation_valve', 2),
        [
            ' A ',
            'ABA',
            ' A '
        ],
        {
            A: 'mekanism:thermal_evaporation_block',
            B: 'mekanism:advanced_control_circuit'
        }
    )
    event.shaped(
        Item.of('mekanism:thermal_evaporation_controller', 1),
        [
            'ABA',
            'CDC',
            'CEC'
        ],
        {
            A: 'mekanism:advanced_control_circuit',
            B: '#forge:glass_panes',
            C: 'tfmg:steel_ingot',
            D: 'bucket',
            E: 'copper_ingot'
        }
    )
    event.shaped(
        Item.of('mekanism:sps_port', 2),
        [
            ' A ',
            'ABA',
            ' A '
        ],
        {
            A: 'mekanism:sps_casing',
            B: 'mekanism:ultimate_control_circuit'
        }
    )
    event.shaped(
        Item.of('mekanism:teleporter', 2),
        [
            'ABA',
            'BCB',
            'ABA'
        ],
        {
            A: 'mekanism:basic_control_circuit',
            B: 'createteleporters:quantum_casing',
            C: 'mekanism:teleportation_core'
        }
    )
    event.shaped(
        Item.of('mekanism:robit', 1),
        [
            ' A ',
            'BCB',
            'DED'
        ],
        {
            A: 'tfmg:steel_ingot',
            B: 'mekanism:energy_tablet',
            C: 'mekanism:ultimate_control_circuit',
            D: 'mekanism:alloy_atomic',
            E: '#mekanism:personal_storage'
        }
    )
    event.shaped(
        Item.of('mekanism:jetpack', 1),
        [
            'ABA',
            'CDC',
            ' E '
        ],
        {
            A: 'tfmg:steel_ingot',
            B: 'mekanism:basic_control_circuit',
            C: 'mekanism:ingot_tin',
            D: 'mekanism:basic_chemical_tank',
            E: 'ad_astra:steel_engine'
        }
    )
    event.shaped(
        Item.of('mekanism:rotary_condensentrator', 1),
        [
            'ABA',
            'CDC',
            'EFE'
        ],
        {
            A: 'ad_astra:gas_tank',
            B: 'vintageimprovements:vacuum_chamber',
            C: 'mekanism:advanced_control_circuit',
            D: 'tfmg:electric_casing',
            E: 'tfmg:heavy_plate',
            F: 'moreburners:copper_coil'
        }
    )
    event.shaped(
        Item.of('mekanism:chargepad', 1),
        [
            'AAA',
            'BCB'
        ],
        {
            A: 'kubejs:magnetic_plate',
            B: 'mekanism:alloy_reinforced',
            C: 'mekanism:energy_tablet'
        }
    )
    event.shapeless(
        Item.of('mekanism:block_raw_lead', 1),
        [
            '9x tfmg:raw_lead'
        ]
    )
    blastsmelt('tfmg:nickel_ingot', 'kubejs:dust_nickel')
    blastsmelt('tfmg:lithium_ingot', 'mekanism:dust_lithium')
    blastsmelt('create:zinc_ingot', 'kubejs:dust_zinc')
    blastsmelt('createloveandwar:tungsten', 'kubejs:dust_tungsten')
    blastsmelt('ad_astra:desh_ingot', 'kubejs:dust_desh')
    blastsmelt('ad_astra:ostrum_ingot', 'kubejs:dust_ostrum')
    blastsmelt('ad_astra:calorite_ingot', 'kubejs:dust_calorite')
    blastsmelt('tfmg:lithium_ingot', 'kubejs:crushed_raw_lithium')
    blastsmelt('createloveandwar:tungsten', 'kubejs:crushed_raw_tungsten')
    //mekanism generators
    event.replaceInput(
        {id: 'mekanismgenerators:generator/solar'},
        'iron_ingot',
        'tfmg:steel_ingot'
    )
    event.replaceInput(
        {id: 'mekanismgenerators:fission_reactor/casing'},
        'mekanism:steel_casing',
        'tfmg:heavy_machinery_casing'
    )
    event.replaceInput(
        {id: 'mekanismgenerators:reactor/frame'},
        'mekanism:steel_casing',
        'tfmg:heavy_machinery_casing'
    )
    event.shaped(
        Item.of('mekanismgenerators:solar_panel', 1),
        [
            'AA',
            'AA'
        ],
        {
            A: 'ad_astra:photovoltaic_etrium_cell'
        }
    )
    event.shaped(
        Item.of('mekanismgenerators:turbine_rotor', 1),
        [
            'A',
            'A'
        ],
        {
            A: 'tfmg:rebar'
        }
    )
    event.shaped(
        Item.of('mekanismgenerators:rotational_complex', 1),
        [
            'ABA',
            'CDC',
            'ABA'
        ],
        {
            A: 'tfmg:steel_ingot',
            B: 'mekanism:alloy_infused',
            C: 'mekanism:advanced_control_circuit',
            D: 'create:mechanical_bearing'
        }
    )
    event.shaped(
        Item.of('mekanismgenerators:electromagnetic_coil', 1),
        [
            'ABA',
            'BCB',
            'ABA'
        ],
        {
            A: 'tfmg:steel_ingot',
            B: '#createaddition:spools/high_current',
            C: 'kubejs:magnetic_spool'
        }
    )
    //ad astra 
    event.replaceInput(
        {input: '#ad_astra:steel_ingots'},
        '#ad_astra:steel_ingots',
        'tfmg:steel_ingot'
    )
    event.replaceInput(
        {input: '#ad_astra:steel_blocks'},
        '#ad_astra:steel_blocks',
        'tfmg:steel_block'
    )
    event.replaceInput(
        {input: '#ad_astra:steel_plates'},
        '#ad_astra:steel_plates',
        'tfmg:heavy_plate'
    )
    event.replaceInput(
        {input: '#ad_astra:steel_rods'},
        '#ad_astra:steel_rods',
        'tfmg:rebar'
    )
    event.replaceInput(
        {id: 'ad_astra:oxygen_distributor'},
        'ad_astra:fan',
        'create:propeller'
    )
    event.replaceInput(
        {id: 'ad_astra:oxygen_distributor'},
        'ad_astra:desh_plate',
        'mekanism:alloy_infused'
    )
    event.replaceInput(
        {id: 'ad_astra:oxygen_sensor'},
        'ad_astra:fan',
        'create:propeller'
    )
    event.replaceInput(
        {id: 'ad_astra:oxygen_sensor'},
        'redstone_block',
        'create:content_observer'
    )
    event.replaceInput(
        {id: 'ad_astra:gravity_normalizer'},
        'ad_astra:desh_plate',
        'ad_astra:ostrum_plate'
    )
    event.replaceInput(
        {id: 'ad_astra:gravity_normalizer'},
        'diamond_block',
        'nether_star'
    )
    surround('kubejs:magnetic_spool', 'kubejs:magnetic_wire', 'createaddition:spool')
    event.shaped(
        Item.of('ad_astra:coal_generator', 1),
        [
            'ABA',
            'ACA',
            'ADA'
        ],
        {
            A: 'create:iron_sheet',
            B: 'kubejs:magnetic_spool',
            C: 'tfmg:turbine_blade',
            D: 'immersive_aircraft:boiler'
        }
    )
    event.shaped(
        Item.of('ad_astra:etrionic_blast_furnace', 1),
        [
            'ABA',
            'CDC',
            'ABA'
        ],
        {
            A: 'blast_furnace',
            B: 'mekanism:alloy_infused',
            C: 'mekanism:advanced_control_circuit',
            D: 'tfmg:electric_casing'
        }
    )
    event.shaped(
        Item.of('ad_astra:compressor', 1),
        [
            'ABA',
            'CDC',
            'ACA'
        ],
        {
            A: 'redstone',
            B: 'vintageimprovements:helve_hammer',
            C: 'mekanism:basic_control_circuit',
            D: 'tfmg:electric_casing'
        }
    )
    event.shaped(
        Item.of('ad_astra:fuel_refinery', 1),
        [
            'ABA',
            'CDC',
            'EFE'
        ],
        {
            A: 'vintageimprovements:vacuum_chamber',
            B: 'tfmg:heavy_plate',
            C: 'create:fluid_tank',
            D: 'tfmg:electric_casing',
            E: 'mekanism:basic_control_circuit',
            F: 'create:filter'
        }
    )
    event.shaped(
        Item.of('ad_astra:oxygen_loader', 1),
        [
            'ABC',
            'DED',
            'FGF'
        ],
        {
            A: 'mekanism:electrolytic_core',
            B: 'create:fluid_pipe',
            C: 'create:spout',
            D: 'ad_astra:gas_tank',
            E: 'tfmg:electric_casing',
            F: 'tfmg:heavy_plate',
            G: 'mekanism:basic_control_circuit'
        }
    )
    event.shaped(
        Item.of('ad_astra:etrionic_capacitor', 1),
        [
            ' A ',
            'BCB',
            ' A '
        ],
        {
            A: 'tfmg:heavy_plate',
            B: 'mekanism:enriched_diamond',
            C: 'tfmg:capacitor_'
        }
    )
    event.shaped(
        Item.of('ad_astra:energizer', 1),
        [
            'ABA',
            'CDC',
            'EFE'
        ],
        {
            A: 'ad_astra:etrionic_capacitor',
            B: 'kubejs:magnetic_plate',
            C: 'mekanism:alloy_infused',
            D: 'tfmg:electric_casing',
            E: 'ad_astra:desh_plate',
            F: 'mekanism:energy_tablet'
        }
    )
    event.shaped(
        Item.of('ad_astra:cryo_freezer', 1),
        [
            ' A ',
            'BCD',
            'EEE'
        ],
        {
            A: 'mekanism:rotary_condensentrator',
            B: 'mekanism:electrolytic_separator',
            C: 'mekanism:alloy_atomic',
            D: 'ad_astra:fuel_refinery',
            E: 'ad_astra:calorite_plate'
        }
    )
})