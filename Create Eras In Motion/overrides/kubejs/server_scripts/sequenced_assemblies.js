var tcirc = 'create_dd:incomplete_integrated_circuit'
var tbas = 'refinedstorage:raw_basic_processor'
var timp = 'refinedstorage:raw_improved_processor'
var tadv = 'refinedstorage:raw_advanced_processor'
var tqua = 'createteleporters:incomplete_q_mechanism'
var tphoto = 'kubejs:incomplete_photovoltaic_cell'
var tbcon = 'kubejs:incomplete_basic_control_circuit'
var tacon = 'kubejs:incomplete_advanced_control_circuit'
var tecon = 'kubejs:incomplete_elite_control_circuit'
var tucon = 'kubejs:incomplete_ultimate_control_circuit'
var tgas = 'kubejs:unfinished_gas_burning_generator'
var tbio = 'kubejs:unfinished_bio_generator'
ServerEvents.recipes(event => {
    //create dreams and desires
    event.recipes.createSequencedAssembly([ //start the recipe
        Item.of('create_dd:abstruse_mechanism') //this will be the result in JEI
    ], 'create_dd:kinetic_mechanism', [ // the input
		// the transitional item
		event.recipes.createDeploying('create_dd:incomplete_abstruse_mechanism', [ 'create_dd:incomplete_abstruse_mechanism', 'minecraft:ender_pearl'] ),
 	 	// like a normal recipe function, is used as a sequence step in this array. Input and output have the transitional item
    event.recipes.createDeploying('create_dd:incomplete_abstruse_mechanism', [ 'create_dd:incomplete_abstruse_mechanism', 'minecraft:amethyst_shard'] ),
		event.recipes.createDeploying('create_dd:incomplete_abstruse_mechanism', [ 'create_dd:incomplete_abstruse_mechanism', 'minecraft:shulker_shell'] ),
    ]).transitionalItem('create_dd:incomplete_abstruse_mechanism').loops(1) // set the transitional item and the loops (amount of repetitions)

    event.recipes.createSequencedAssembly([
      Item.of('create_dd:infernal_mechanism')
    ], 'create_dd:kinetic_mechanism', [
      event.recipes.createDeploying('create_dd:incomplete_infernal_mechanism', ['create_dd:incomplete_infernal_mechanism', 'minecraft:magma_cream']),
      event.recipes.createDeploying('create_dd:incomplete_infernal_mechanism', ['create_dd:incomplete_infernal_mechanism', 'minecraft:blaze_powder']),
      event.recipes.createFilling('create_dd:incomplete_infernal_mechanism', ['create_dd:incomplete_infernal_mechanism', Fluid.lava(100)]),
    ]).transitionalItem('create_dd:incomplete_infernal_mechanism').loops(1)
    event.recipes.createSequencedAssembly([
      Item.of('create_dd:integrated_circuit')
    ], 'refinedstorage:silicon', [
      event.recipes.createDeploying(tcirc, [tcirc, 'tfmg:capacitor_']),
      event.recipes.createDeploying(tcirc, [tcirc, 'createaddition:capacitor']),
      event.recipes.createDeploying(tcirc, [tcirc, 'tfmg:resistor_']),
    ]).transitionalItem(tcirc).loops(2)
    //RF
    event.recipes.createSequencedAssembly([
      Item.of('refinedstorage:basic_processor')
    ], 'create:iron_sheet', [
      event.recipes.createDeploying(tbas, [tbas, 'refinedstorage:processor_binding']),
      event.recipes.createDeploying(tbas, [tbas, 'create_dd:integrated_circuit']),
      event.recipes.createDeploying(tbas, [tbas, '#forge:wires/high_current']),
      event.recipes.createDeploying(tbas, [tbas, 'createaddition:copper_wire']),
    ]).transitionalItem(tbas).loops(1)

    event.recipes.createSequencedAssembly([
      Item.of('refinedstorage:improved_processor')
    ], 'create:golden_sheet', [
      event.recipes.createDeploying(timp, [timp, 'refinedstorage:processor_binding']),
      event.recipes.createDeploying(timp, [timp, 'create_dd:integrated_circuit']),
      event.recipes.createDeploying(timp, [timp, '#forge:wires/high_current']),
      event.recipes.createDeploying(timp, [timp, 'createaddition:copper_wire']),
    ]).transitionalItem(timp).loops(1)

    event.recipes.createSequencedAssembly([
      Item.of('refinedstorage:advanced_processor')
    ], 'diamond', [
      event.recipes.createDeploying(tadv, [tadv, 'refinedstorage:processor_binding']),
      event.recipes.createDeploying(tadv, [tadv, 'create_dd:integrated_circuit']),
      event.recipes.createDeploying(tadv, [tadv, '#forge:wires/high_current']),
      event.recipes.createDeploying(tadv, [tadv, 'createaddition:copper_wire']),
    ]).transitionalItem(tadv).loops(1)

    event.recipes.createSequencedAssembly([
      Item.of('ad_astra:photovoltaic_etrium_cell')
    ], 'kubejs:polysilicate_sheet', [
      event.recipes.createDeploying(tphoto, [tphoto, '#forge:wires/high_current']),
      event.recipes.createDeploying(tphoto, [tphoto, '#forge:wires/high_current']),
      event.recipes.createPressing(tphoto, tphoto),
    ]).transitionalItem(tphoto).loops(1)
    //quantum
    event.recipes.createSequencedAssembly([
      Item.of('createteleporters:quantum_mechanism')
    ], 'create:sturdy_sheet', [
      event.recipes.createFilling(tqua, [tqua, Fluid.of('createteleporters:quantum_fluid', 100)]),
      event.recipes.createDeploying(tqua, [tqua, 'refinedstorage:advanced_processor']),
      event.recipes.createPressing(tqua, tqua),
      event.recipes.createPressing(tqua, tqua),
    ]).transitionalItem(tqua).loops(1)
    //mekanism
    event.recipes.createSequencedAssembly([
      Item.of('mekanism:basic_control_circuit')
    ], 'vintageimprovements:osmium_sheet', [
      event.recipes.createDeploying(tbcon, [tbcon, 'refinedstorage:processor_binding']),
      event.recipes.createDeploying(tbcon, [tbcon, 'create_dd:integrated_circuit']),
      event.recipes.createDeploying(tbcon, [tbcon, '#forge:wires/high_current']),
      event.recipes.createDeploying(tbcon, [tbcon, 'createaddition:copper_wire']),
    ]).transitionalItem(tbcon).loops(1)

    event.recipes.createSequencedAssembly([
      Item.of('mekanism:advanced_control_circuit')
    ], 'mekanism:alloy_infused', [
      event.recipes.createDeploying(tacon, [tacon, 'refinedstorage:processor_binding']),
      event.recipes.createDeploying(tacon, [tacon, 'create_dd:integrated_circuit']),
      event.recipes.createDeploying(tacon, [tacon, '#forge:wires/high_current']),
      event.recipes.createDeploying(tacon, [tacon, 'createaddition:copper_wire']),
    ]).transitionalItem(tacon).loops(1)

    event.recipes.createSequencedAssembly([
      Item.of('mekanism:elite_control_circuit')
    ], 'mekanism:alloy_reinforced', [
      event.recipes.createDeploying(tecon, [tecon, 'refinedstorage:processor_binding']),
      event.recipes.createDeploying(tecon, [tecon, 'create_dd:integrated_circuit']),
      event.recipes.createDeploying(tecon, [tecon, '#forge:wires/high_current']),
      event.recipes.createDeploying(tecon, [tecon, 'createaddition:copper_wire']),
    ]).transitionalItem(tecon).loops(1)

    event.recipes.createSequencedAssembly([
      Item.of('mekanism:ultimate_control_circuit')
    ], 'mekanism:alloy_atomic', [
      event.recipes.createDeploying(tucon, [tucon, 'refinedstorage:processor_binding']),
      event.recipes.createDeploying(tucon, [tucon, 'create_dd:integrated_circuit']),
      event.recipes.createDeploying(tucon, [tucon, '#forge:wires/high_current']),
      event.recipes.createDeploying(tucon, [tucon, 'createaddition:copper_wire']),
    ]).transitionalItem(tucon).loops(1)
    //mekaniosm generators
    event.recipes.createSequencedAssembly([
      Item.of('mekanismgenerators:gas_burning_generator')
    ], 'tfmg:engine_base', [
      event.recipes.createDeploying(tgas, [tgas, 'kubejs:magnetic_spool']),
      event.recipes.createDeploying(tgas, [tgas, '#createaddition:spools/high_current']),
      event.recipes.createDeploying(tgas, [tgas, 'tfmg:turbine_blade']),
      event.recipes.createDeploying(tgas, [tgas, 'tfmg:engine_chamber']),
      event.recipes.createDeploying(tgas, [tgas, 'tfmg:screw']),
      event.recipes.createDeploying(tgas, [tgas, 'tfmg:screwdriver']),
      event.recipes.createFilling(tgas, [tgas, Fluid.of('tfmg:lubrication_oil', 1000)]),
    ]).transitionalItem(tgas).loops(5)

    event.recipes.createSequencedAssembly([
      Item.of('mekanismgenerators:bio_generator')
    ], 'furnace', [
      event.recipes.createDeploying(tbio, [tbio, 'create_dd:furnace_engine']),
      event.recipes.createDeploying(tbio, [tbio, 'mekanismgenerators:electromagnetic_coil']),
      event.recipes.createFilling(tgas, [tbio, Fluid.of('tfmg:lubrication_oil', 1000)]),
      event.recipes.createDeploying(tbio, [tbio, 'tfmg:screw']),
      event.recipes.createDeploying(tbio, [tbio, 'tfmg:screwdriver']),
      event.recipes.createDeploying(tbio, [tbio, 'tfmg:engine_chamber']),
      event.recipes.createDeploying(tbio, [tbio, 'mekanism:basic_control_circuit']),
    ]).transitionalItem(tbio).loops(2)

    //ad astra
    event.recipes.createSequencedAssembly([
      Item.of('ad_astra:steel_engine')
    ], 'tfmg:engine_base', [
      event.recipes.createDeploying('kubejs:unfinished_steel_engine', ['kubejs:unfinished_steel_engine', 'tfmg:engine_chamber']),
      event.recipes.createDeploying('kubejs:unfinished_steel_engine', ['kubejs:unfinished_steel_engine', 'tfmg:spark_plug']),
      event.recipes.createDeploying('kubejs:unfinished_steel_engine', ['kubejs:unfinished_steel_engine', 'tfmg:screw']),
      event.recipes.createDeploying('kubejs:unfinished_steel_engine', ['kubejs:unfinished_steel_engine', 'tfmg:screwdriver']),
      event.recipes.createFilling('kubejs:unfinished_steel_engine', ['kubejs:unfinished_steel_engine', Fluid.of('tfmg:lubrication_oil', 1000)]),
      event.recipes.createDeploying('kubejs:unfinished_steel_engine', ['kubejs:unfinished_steel_engine', 'tfmg:heavy_plate']),
      event.recipes.createPressing('kubejs:unfinished_steel_engine', 'kubejs:unfinished_steel_engine'),
      event.recipes.createDeploying('kubejs:unfinished_steel_engine', ['kubejs:unfinished_steel_engine', 'tfmg:heavy_plate']),
      event.recipes.createPressing('kubejs:unfinished_steel_engine', 'kubejs:unfinished_steel_engine'),
    ]).transitionalItem('kubejs:unfinished_steel_engine').loops(3)

    event.recipes.createSequencedAssembly([
      Item.of('ad_astra:desh_engine')
    ], 'tfmg:engine_base', [
      event.recipes.createDeploying('kubejs:unfinished_desh_engine', ['kubejs:unfinished_desh_engine', 'mekanism:alloy_infused']),
      event.recipes.createDeploying('kubejs:unfinished_desh_engine', ['kubejs:unfinished_desh_engine', 'tfmg:engine_chamber']),
      event.recipes.createDeploying('kubejs:unfinished_desh_engine', ['kubejs:unfinished_desh_engine', 'tfmg:spark_plug']),
      event.recipes.createDeploying('kubejs:unfinished_desh_engine', ['kubejs:unfinished_desh_engine', 'tfmg:screw']),
      event.recipes.createDeploying('kubejs:unfinished_desh_engine', ['kubejs:unfinished_desh_engine', 'tfmg:screwdriver']),
      event.recipes.createFilling('kubejs:unfinished_desh_engine', ['kubejs:unfinished_desh_engine', Fluid.of('tfmg:lubrication_oil', 1000)]),
      event.recipes.createDeploying('kubejs:unfinished_desh_engine', ['kubejs:unfinished_desh_engine', 'ad_astra:desh_plate']),
      event.recipes.createPressing('kubejs:unfinished_desh_engine', 'kubejs:unfinished_desh_engine'),
      event.recipes.createDeploying('kubejs:unfinished_desh_engine', ['kubejs:unfinished_desh_engine', 'ad_astra:desh_plate']),
      event.recipes.createPressing('kubejs:unfinished_desh_engine', 'kubejs:unfinished_desh_engine'),
    ]).transitionalItem('kubejs:unfinished_desh_engine').loops(3)

    event.recipes.createSequencedAssembly([
      Item.of('ad_astra:ostrum_engine')
    ], 'tfmg:engine_base', [
      event.recipes.createDeploying('kubejs:unfinished_ostrum_engine', ['kubejs:unfinished_ostrum_engine', 'mekanism:alloy_reinforced']),
      event.recipes.createDeploying('kubejs:unfinished_ostrum_engine', ['kubejs:unfinished_ostrum_engine', 'tfmg:engine_chamber']),
      event.recipes.createDeploying('kubejs:unfinished_ostrum_engine', ['kubejs:unfinished_ostrum_engine', 'tfmg:spark_plug']),
      event.recipes.createDeploying('kubejs:unfinished_ostrum_engine', ['kubejs:unfinished_ostrum_engine', 'tfmg:screw']),
      event.recipes.createDeploying('kubejs:unfinished_ostrum_engine', ['kubejs:unfinished_ostrum_engine', 'tfmg:screwdriver']),
      event.recipes.createFilling('kubejs:unfinished_ostrum_engine', ['kubejs:unfinished_ostrum_engine', Fluid.of('tfmg:lubrication_oil', 1000)]),
      event.recipes.createDeploying('kubejs:unfinished_ostrum_engine', ['kubejs:unfinished_ostrum_engine', 'ad_astra:ostrum_plate']),
      event.recipes.createPressing('kubejs:unfinished_ostrum_engine', 'kubejs:unfinished_ostrum_engine'),
      event.recipes.createDeploying('kubejs:unfinished_ostrum_engine', ['kubejs:unfinished_ostrum_engine', 'ad_astra:ostrum_plate']),
      event.recipes.createPressing('kubejs:unfinished_ostrum_engine', 'kubejs:unfinished_ostrum_engine'),
    ]).transitionalItem('kubejs:unfinished_ostrum_engine').loops(3)

    event.recipes.createSequencedAssembly([
      Item.of('ad_astra:calorite_engine')
    ], 'tfmg:engine_base', [
      event.recipes.createDeploying('kubejs:unfinished_calorite_engine', ['kubejs:unfinished_calorite_engine', 'mekanism:alloy_atomic']),
      event.recipes.createDeploying('kubejs:unfinished_calorite_engine', ['kubejs:unfinished_calorite_engine', 'tfmg:engine_chamber']),
      event.recipes.createDeploying('kubejs:unfinished_calorite_engine', ['kubejs:unfinished_calorite_engine', 'tfmg:spark_plug']),
      event.recipes.createDeploying('kubejs:unfinished_calorite_engine', ['kubejs:unfinished_calorite_engine', 'tfmg:screw']),
      event.recipes.createDeploying('kubejs:unfinished_calorite_engine', ['kubejs:unfinished_calorite_engine', 'tfmg:screwdriver']),
      event.recipes.createFilling('kubejs:unfinished_calorite_engine', ['kubejs:unfinished_calorite_engine', Fluid.of('tfmg:lubrication_oil', 1000)]),
      event.recipes.createDeploying('kubejs:unfinished_calorite_engine', ['kubejs:unfinished_calorite_engine', 'ad_astra:calorite_plate']),
      event.recipes.createPressing('kubejs:unfinished_calorite_engine', 'kubejs:unfinished_calorite_engine'),
      event.recipes.createDeploying('kubejs:unfinished_calorite_engine', ['kubejs:unfinished_calorite_engine', 'ad_astra:calorite_plate']),
      event.recipes.createPressing('kubejs:unfinished_calorite_engine', 'kubejs:unfinished_calorite_engine'),
    ]).transitionalItem('kubejs:unfinished_calorite_engine').loops(3)
})