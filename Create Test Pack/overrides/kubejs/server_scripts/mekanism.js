ServerEvents.recipes(event => {
    function painting(output, tag_out, pigment_in, pigment_amount) {
        event.custom({
            "type":"mekanism:painting",
            "chemicalInput":
            {
                "amount": pigment_amount,"pigment": pigment_in
            },
            "itemInput":{
                "ingredient":
                {
                    "type":"forge:difference","base":
                    {
                        "tag": tag_out
                    },"subtracted":
                    {
                            "item": output
                    }
                }
            },
            "output":{"item": output}
        })
    }
    function extracting(input, pigment_out, pigment_amount) {
        event.custom({
            "type":"mekanism:pigment_extracting","input":
            {
                "ingredient":
                {
                    "item": input
                }
            },"output":
            {
                "amount": pigment_amount,"pigment": pigment_out
            }
        })
    }
    function rotary(fluid, gas) {
        event.custom({
            "type":"mekanism:rotary","fluidInput":
            {
                "amount":1,"fluid": fluid
            },"fluidOutput":
            {"amount":1,"fluid": fluid

            },"gasInput":
            {
                "amount":1,"gas": gas
            },"gasOutput":
            {
                "amount":1,"gas": gas
            }
        })
    }
    function dissolution(acid_amount, input_amount, input_tag, slurry_amount, ouput_slurry) {
        event.custom({
            "type":"mekanism:dissolution","gasInput":
            {
                "amount": acid_amount,"gas":"mekanism:sulfuric_acid"
            },"itemInput":
            {
                "amount": input_amount,"ingredient":
                {
                    "tag": input_tag
                }
            },"output":
            {
                "amount": slurry_amount,"chemicalType":"slurry","slurry": ouput_slurry
            }
        })
    }
    function crystallize(slurry, crystal) {
        event.custom({
            "type":"mekanism:crystallizing","chemicalType":"slurry","input":
            {
                "amount":200,"slurry": slurry
            },"output":
            {
                "item": crystal
            }
        })
    }
    //ores
    const oretype = ["tin", "osmium", "uranium", "lead", "nickel", "lithium", "iron", "gold", "zinc", "tungsten"]
    const oremod = ["mekanism", "mekanism", "mekanism", "mekanism", "tfmg", "tfmg", "minecraft", "minecraft", "create", "createloveandwar"]
    const crushmod = ["create", "create", "create", "create", "create", "kubejs", "create", "create", "create", "kubejs"]
    for (let i = 0; i < oretype.length; i++) {
        event.recipes.mekanism.crushing(Item.of('2x ' + crushmod[i] + ':crushed_raw_' + oretype[i]), (oremod[i] + ':deepslate_' + oretype[i] + '_ore'))
    }
    for (let i = 0; i < 9; i++) {
        event.recipes.mekanism.crushing(Item.of(crushmod[i] + ':crushed_raw_' + oretype[i]), (oremod[i] + ':' + oretype[i] + '_ore'))
    }
    event.recipes.mekanism.crushing('2x quartz', 'nether_quartz_ore')
    event.recipes.mekanism.crushing('coal', 'coal_ore')
    event.recipes.mekanism.crushing('coal', 'ad_astra:venus_coal_ore')
    event.recipes.mekanism.crushing('coal', 'ad_astra:glacio_coal_ore')
    event.recipes.mekanism.crushing('2x coal', 'deepslate_coal_ore')
    event.recipes.mekanism.crushing('create:crushed_raw_iron', 'ad_astra:moon_iron_ore')
    event.recipes.mekanism.crushing('create:crushed_raw_iron', 'ad_astra:mars_iron_ore')
    event.recipes.mekanism.crushing('create:crushed_raw_iron', 'ad_astra:mercury_iron_ore')
    event.recipes.mekanism.crushing('create:crushed_raw_iron', 'ad_astra:glacio_iron_ore')
    event.recipes.mekanism.crushing('create:crushed_raw_gold', 'ad_astra:venus_gold_ore')
    event.recipes.mekanism.crushing('18x gold_nugget', 'nether_gold_ore')
    event.recipes.mekanism.crushing('18x gold_nugget', 'gilded_blackstone')
    event.recipes.mekanism.crushing('5x create:crushed_raw_copper', 'copper_ore')
    event.recipes.mekanism.crushing('7x create:crushed_raw_copper', 'deepslate_copper_ore')
    event.recipes.mekanism.crushing('7x create:crushed_raw_copper', 'ad_astra:glacio_copper_ore')
    event.recipes.mekanism.crushing('6x redstone', 'redstone_ore')
    event.recipes.mekanism.crushing('7x redstone', 'deepslate_redstone_ore')
    event.recipes.mekanism.crushing('emerald', 'emerald_ore')
    event.recipes.mekanism.crushing('2x emerald', 'deepslate_emerald_ore')
    event.recipes.mekanism.crushing('10x lapis_lazuli', 'lapis_ore')
    event.recipes.mekanism.crushing('12x lapis_lazuli', 'deepslate_lapis_ore')
    event.recipes.mekanism.crushing('10x lapis_lazuli', 'ad_astra:glacio_lapis_ore')
    event.recipes.mekanism.crushing('diamond', 'diamond_ore')
    event.recipes.mekanism.crushing('2x diamond', 'deepslate_diamond_ore')
    event.recipes.mekanism.crushing('diamond', 'ad_astra:mars_diamond_ore')
    event.recipes.mekanism.crushing('diamond', 'ad_astra:venus_diamond_ore')
    event.recipes.mekanism.crushing('create:crushed_raw_tin', 'mekanismaaa:moon_tin_ore')
    event.recipes.mekanism.crushing('create:crushed_raw_tin', 'mekanismaaa:mars_tin_ore')
    event.recipes.mekanism.crushing('create:crushed_raw_tin', 'mekanismaaa:glacio_tin_ore')
    event.recipes.mekanism.crushing('create:crushed_raw_osmium', 'mekanismaaa:moon_osmium_ore')
    event.recipes.mekanism.crushing('create:crushed_raw_osmium', 'mekanismaaa:mercury_osmium_ore')
    event.recipes.mekanism.crushing('create:crushed_raw_osmium', 'mekanismaaa:glacio_osmium_ore')
    event.recipes.mekanism.crushing('create:crushed_raw_uranium', 'mekanismaaa:mars_uranium_ore')
    event.recipes.mekanism.crushing('create:crushed_raw_uranium', 'mekanismaaa:venus_uranium_ore')
    event.recipes.mekanism.crushing('create:crushed_raw_uranium', 'mekanismaaa:mercury_uranium_ore')
    event.recipes.mekanism.crushing('create:crushed_raw_uranium', 'mekanismaaa:glacio_uranium_ore')
    event.recipes.mekanism.crushing('create:crushed_raw_lead', 'mekanismaaa:venus_lead_ore')
    event.recipes.mekanism.crushing('create:crushed_raw_lead', 'mekanismaaa:mercury_lead_ore')
    event.recipes.mekanism.crushing('create:crushed_raw_lead', 'mekanismaaa:glacio_lead_ore')
    event.recipes.mekanism.crushing('create_ad_astra_compat:crushed_desh_ore', 'ad_astra:moon_desh_ore')
    event.recipes.mekanism.crushing('create_ad_astra_compat:crushed_ostrum_ore', 'ad_astra:mars_ostrum_ore')
    event.recipes.mekanism.crushing('create_ad_astra_compat:crushed_calorite_ore', 'ad_astra:venus_calorite_ore')
    event.recipes.mekanism.crushing(Item.of('2x create_ad_astra_compat:crushed_desh_ore'), ('ad_astra:deepslate_desh_ore'))
    event.recipes.mekanism.crushing(Item.of('2x create_ad_astra_compat:crushed_ostrum_ore'), ('ad_astra:deepslate_ostrum_ore'))
    event.recipes.mekanism.crushing(Item.of('2x create_ad_astra_compat:crushed_calorite_ore'), ('ad_astra:deepslate_calorite_ore'))
    event.recipes.mekanism.crushing('2x ad_astra:ice_shard', 'ad_astra:deepslate_ice_shard_ore')
    event.recipes.mekanism.crushing('ad_astra:ice_shard', 'ad_astra:moon_ice_shard_ore')
    event.recipes.mekanism.crushing('ad_astra:ice_shard', 'ad_astra:mars_ice_shard_ore')
    event.recipes.mekanism.crushing('ad_astra:ice_shard', 'ad_astra:glacio_ice_shard_ore')
    event.recipes.mekanism.crushing('3x tfmg:sulfur_dust', 'createloveandwar:nether_sulphur_ore')
    event.recipes.mekanism.crushing('3x tfmg:sulfur_dust', 'createloveandwar:sulphur_ore')
    event.recipes.mekanism.crushing('5x tfmg:sulfur_dust', 'createloveandwar:deepslate_sulphur_ore')
    event.recipes.mekanism.crushing('3x mekanism:fluorite_gem', 'mekanism:fluorite_ore')
    event.recipes.mekanism.crushing('5x mekanism:fluorite_gem', 'mekanism:deepslate_fluorite_ore')
    event.recipes.mekanism.crushing('3x mekanism:fluorite_gem', 'mekanismaaa:mars_fluorite_ore')
    event.recipes.mekanism.crushing('3x mekanism:fluorite_gem', 'mekanismaaa:venus_fluorite_ore')
    event.recipes.mekanism.crushing('3x mekanism:fluorite_gem', 'mekanismaaa:glacio_fluorite_ore')
    event.recipes.mekanism.crushing('2x ad_astra:cheese', 'ad_astra:moon_cheese_ore')
    oretype.push("copper")
    crushmod.push("create")
    oremod.push("minecraft")
    for (let i = 0; i < oretype.length; i++) {
        event.recipes.mekanism.crushing(crushmod[i] + ':crushed_raw_' + oretype[i], oremod[i] + ':raw_' + oretype[i])
    }
    event.recipes.mekanism.crushing('create_ad_astra_compat:crushed_desh_ore', 'ad_astra:raw_desh')
    event.recipes.mekanism.crushing('create_ad_astra_compat:crushed_ostrum_ore', 'ad_astra:raw_ostrum')
    event.recipes.mekanism.crushing('create_ad_astra_compat:crushed_calorite_ore', 'ad_astra:raw_calorite')
    event.recipes.mekanism.crushing('kubejs:dust_nickel', 'tfmg:nickel_ingot')
    event.recipes.mekanism.crushing('kubejs:dust_zinc', 'create:zinc_ingot')
    event.recipes.mekanism.crushing('kubejs:dust_tungsten', 'createloveandwar:tungsten')
    event.recipes.mekanism.crushing('kubejs:dust_desh', 'ad_astra:desh_ingot')
    event.recipes.mekanism.crushing('kubejs:dust_ostrum', 'ad_astra:ostrum_ingot')
    event.recipes.mekanism.crushing('kubejs:dust_calorite', 'ad_astra:calorite_ingot')
    event.recipes.mekanism.crushing('kubejs:dust_ice_shard', 'ad_astra:ice_shard')
    event.recipes.mekanism.crushing('mekanism:dust_lithium', 'tfmg:lithium_ingot')
    event.recipes.mekanism.crushing('9x create_ad_astra_compat:crushed_ostrum_ore', 'ad_astra:raw_ostrum_block')
    event.recipes.mekanism.crushing('9x create_ad_astra_compat:crushed_desh_ore', 'ad_astra:raw_desh_block')
    event.recipes.mekanism.crushing('9x create_ad_astra_compat:crushed_calorite_ore', 'ad_astra:raw_calorite_block')
    event.recipes.mekanism.crushing('9x create:crushed_raw_osmium', 'mekanism:block_raw_osmium')
    event.recipes.mekanism.crushing('9x create:crushed_raw_tin', 'mekanism:block_raw_tin')
    event.recipes.mekanism.crushing('9x create:crushed_raw_uranium', 'mekanism:block_raw_uranium')
    event.recipes.mekanism.crushing('9x create:crushed_raw_lead', 'mekanism:block_raw_lead')
    event.recipes.mekanism.crushing('9x create:crushed_raw_copper', 'raw_copper_block')
    event.recipes.mekanism.crushing('9x create:crushed_raw_gold', 'raw_gold_block')
    event.recipes.mekanism.crushing('9x create:crushed_raw_iron', 'raw_iron_block')
    event.recipes.mekanism.crushing('9x create:crushed_raw_zinc', 'create:raw_zinc_block')
    event.recipes.mekanism.crushing('9x kubejs:crushed_raw_tungsten', 'createloveandwar:raw_tungsten_block')
    event.recipes.mekanism.crushing('9x tfmg:sulfur_dust', 'createloveandwar:raw_sulphur_block')
    event.recipes.mekanism.crushing('9x kubejs:crushed_raw_lithium', 'kubejs:block_raw_lithium')
    event.recipes.mekanism.crushing('9x create:crushed_raw_nickel', 'kubejs:block_raw_nickel')
    const mat = ['calorite', 'desh', 'nickel', 'ostrum', 'tungsten', 'zinc', 'lithium']
    for (let i = 0; i < 7; i++) {
        event.recipes.mekanism.crushing('kubejs:dirty_dust_' + mat[i], 'kubejs:clump_' + mat[i])
    }
    //the other crushers
    event.recipes.mekanism.crushing('4x iron_nugget', '#create:stone_types/crimsite')
    event.recipes.mekanism.crushing('create:crushed_raw_lead', '#forge:raw_materials/lead')
    event.recipes.mekanism.crushing('create:crushed_raw_lead', '#tfmg:stone_types/galena')
    event.recipes.mekanism.crushing('3x gold_nugget', '#create:stone_types/ochrum')
    event.recipes.mekanism.crushing('3x blaze_powder', 'blaze_rod')
    event.recipes.mekanism.crushing('3x amethyst_shard', 'amethyst_block')
    event.recipes.mekanism.crushing('tfmg:coal_coke_dust', 'tfmg:coal_coke')
    event.recipes.mekanism.crushing('5x create:copper_nugget', '#create:stone_types/veridium')
    event.recipes.mekanism.crushing('vintageimprovements:sulfur_chunk', '#create:stone_types/scoria')
    event.recipes.mekanism.crushing('vintageimprovements:sulfur_chunk', '#create:stone_types/scorchia')
    event.recipes.mekanism.crushing('quartz', '#create:stone_types/diorite')
    event.recipes.mekanism.crushing('create:limestone', 'tfmg:limesand')
    event.recipes.mekanism.crushing('create:cinder_flour', 'netherrack')
    event.recipes.mekanism.crushing('coal','tfmg:lignite')
    event.recipes.mekanism.crushing('23x iron_nugget', 'iron_horse_armor')
    event.recipes.mekanism.crushing('3x create:zinc_nugget', '#create:stone_types/asurine')
    event.recipes.mekanism.crushing('3x glowstone_dust', 'glowstone')
    event.recipes.mekanism.crushing('diamond', 'diamond_horse_armor')
    event.recipes.mekanism.crushing('vintageimprovements:vanadium_nugget', '#vintageimprovements:stone_types/basalt')
    event.recipes.mekanism.crushing('2x leather', 'leather_horse_armor')
    event.recipes.mekanism.crushing('tfmg:nitrate_dust', 'dirt')
    event.recipes.mekanism.crushing('flint', '#create:stone_types/tuff')
    event.recipes.mekanism.crushing('8x create:experience_nugget', 'createloveandwar:forgotten_gunsmith_parts')
    event.recipes.mekanism.crushing('create:crushed_raw_aluminum', '#tfmg:stone_types/bauxite')
    event.recipes.mekanism.crushing('create:powdered_obsidian', 'obsidian')
    event.recipes.mekanism.crushing('7x amethyst_shard', 'amethyst_cluster')
    event.recipes.mekanism.crushing('23x gold_nugget', 'golden_horse_armor')
    event.recipes.mekanism.crushing('vintageimprovements:copper_sulfate', 'tfmg:copper_sulfate')
    event.recipes.mekanism.crushing('2x mekanism:bio_fuel', 'honeycomb')
    event.recipes.mekanism.crushing('2x mekanism:bio_fuel', '8x stick')
    event.recipes.mekanism.crushing('2x quartz', 'prismarine_crystals')
    event.recipes.mekanism.crushing('cobblestone', 'andesite')
    event.recipes.mekanism.crushing('ad_astra:venus_sand', 'ad_astra:venus_sandstone')
    event.recipes.mekanism.crushing('3x bone_meal', 'bone')
    event.recipes.mekanism.crushing('3x clay_ball', 'clay')
    event.recipes.mekanism.crushing('2x leather', 'saddle')
    event.recipes.mekanism.crushing('red_sand', 'granite')
    event.recipes.mekanism.crushing('2x white_dye', 'bone_meal')
    event.recipes.mekanism.crushing('2x black_dye', 'ink_sac')
    event.recipes.mekanism.crushing('bone_meal', 'calcite')
    event.recipes.mekanism.crushing('red_sand', 'terracotta')
    //combining
    const material = ["steel", "brass", "tungsten", "netherite", "sturdy", "resin", "iron", "polymer", "duraplas"]
    event.recipes.mekanism.combining('create:andesite_alloy', 'create:zinc_nugget', 'andesite')
    event.recipes.mekanism.combining('tfmg:cement', 'tfmg:limesand', 'clay_ball')
    event.recipes.mekanism.combining('create_dd:bury_blend', 'create:crushed_raw_iron', 'lapis_lazuli')
    event.recipes.mekanism.combining('tfmg:blasting_mixture', '3x create:crushed_raw_iron', 'tfmg:limesand')
    event.recipes.mekanism.combining('2x calcite', 'diorite', 'bone_block')
    event.recipes.mekanism.combining('createteleporters:redstone_pearl', 'ender_pearl', 'redstone')
    event.recipes.mekanism.combining('create:andesite_alloy', 'iron_nugget', 'andesite')
    for (let i = 0; i < material.length; i++) {
        event.recipes.mekanism.combining(Item.of('createloveandwar:upper_receiver_' + material[i]), Item.of('createloveandwar:incomplete_' + material[i] + '_receiver'), Item.of('create:precision_mechanism'))
    }
    event.recipes.mekanism.combining('createloveandwar:grenade_round_buckshot', 'createloveandwar:filled_grenade_casing', 'createloveandwar:ball_bearings')
    event.recipes.mekanism.combining('createloveandwar:heavy_rifle_bullet', 'createloveandwar:filled_heavy_rifle_casing', 'iron_nugget')
    event.recipes.mekanism.combining('createloveandwar:flechette_shell', 'createloveandwar:filled_shotgun_casing', 'createloveandwar:flechettes')
    event.recipes.mekanism.combining('create:large_cogwheel', 'create:cogwheel', '#minecraft:planks')
    event.recipes.mekanism.combining('createloveandwar:gyrojet_pen', 'createloveandwar:gyrojet_basic', 'createloveandwar:steel_cup')
    event.recipes.mekanism.combining('createloveandwar:gyrojet_basic', 'createloveandwar:gyrojet_case', 'createloveandwar:propellant')
    event.recipes.mekanism.combining('createloveandwar:artillery_shell_he', 'createloveandwar:filled_artillery_casing', 'tnt')
    event.recipes.mekanism.combining('createloveandwar:shotgun_casing', 'createloveandwar:brass_cup', 'paper')
    event.recipes.mekanism.combining('createloveandwar:gyrojet_heatseeker', 'createloveandwar:gyrojet_basic', 'createloveandwar:seeker_unit')
    event.recipes.mekanism.combining('createloveandwar:pistol_bullet_ap', 'createloveandwar:filled_pistol_casing', 'createloveandwar:tungsten_nugget')
    event.recipes.mekanism.combining('createloveandwar:filled_shotgun_casing', 'createloveandwar:shotgun_casing', '#createloveandwar:propellant')
    event.recipes.mekanism.combining('createloveandwar:filled_grenade_casing', 'createloveandwar:grenade_casing', '#createloveandwar:propellant')
    event.recipes.mekanism.combining('createloveandwar:filled_artillery_casing', 'createloveandwar:artillery_shell', 'iron_ingot')
    event.recipes.mekanism.combining('create:cogwheel', 'create:shaft', '#minecraft:planks')
    event.recipes.mekanism.combining('createloveandwar:filled_pistol_casing', 'createloveandwar:pistol_casing', '#createloveandwar:propellant')
    event.recipes.mekanism.combining('createloveandwar:grenade_round_he', 'createloveandwar:filled_grenade_casing', 'createloveandwar:grenade_he')
    event.recipes.mekanism.combining('createloveandwar:gyrojet_he', 'createloveandwar:gyrojet_basic', 'createloveandwar:grenade_he')
    event.recipes.mekanism.combining('createloveandwar:pistol_bullet', 'createloveandwar:filled_pistol_casing', 'iron_nugget')
    event.recipes.mekanism.combining('createloveandwar:explosive_shell', 'createloveandwar:filled_shotgun_casing', 'createloveandwar:grenade_he')
    event.recipes.mekanism.combining('createloveandwar:buckshot_shell', 'createloveandwar:filled_shotgun_casing', 'createloveandwar:ball_bearings')
    event.recipes.mekanism.combining('createloveandwar:slug_shell', 'createloveandwar:filled_shotgun_casing', 'iron_ingot')
    event.recipes.mekanism.combining('createloveandwar:rifle_bullet_ap', 'createloveandwar:filled_rifle_casing', 'createloveandwar:tungsten_nugget')
    event.recipes.mekanism.combining('createloveandwar:pistol_bullet_ap', 'createloveandwar:filled_pistol_casing', 'create:copper_nugget')
    event.recipes.mekanism.combining('createloveandwar:rifle_bullet', 'createloveandwar:filled_rifle_casing', 'iron_nugget')
    event.recipes.mekanism.combining('createloveandwar:rifle_bullet_soft', 'createloveandwar:filled_rifle_casing', 'create:copper_nugget')
    event.recipes.mekanism.combining('createloveandwar:filled_rifle_casing', 'createloveandwar:rifle_casing', '#createloveandwar:propellant')
    event.recipes.mekanism.combining('createloveandwar:artillery_shell_ap', 'createloveandwar:filled_artillery_casing', 'createloveandwar:tungsten')
    event.recipes.mekanism.combining('create:railway_casing', 'create:brass_casing', 'create:sturdy_sheet')
    event.recipes.mekanism.combining('create:shaft', 'create:cogwheel', 'create_dd:coal_piece')
    event.recipes.mekanism.combining('create_dd:industrial_casing', 'create:industrial_iron_block', 'create:zinc_ingot')
    event.recipes.mekanism.combining('create:copper_casing', '#forge:stripped_wood', 'copper_ingot')
    event.recipes.mekanism.combining('refinedstorage:machine_casing', '#minecraft:stone_tool_materials', 'refinedstorage:quartz_enriched_iron')
    event.recipes.mekanism.combining('createteleporters:quantum_casing', 'create:brass_casing', 'chorus_fruit')
    event.recipes.mekanism.combining('tfmg:coke_oven', 'create:industrial_iron_block', 'tfmg:cast_iron_ingot')
    event.recipes.mekanism.combining('create_connected:fan_smoking_catalyst', 'create_connected:empty_fan_catalyst', 'netherrack')
    event.recipes.mekanism.combining('tfmg:steel_casing', 'tfmg:hardened_planks', 'tfmg:steel_ingot')
    event.recipes.mekanism.combining('create_connected:fan_sanding_catalyst', 'create_connected:empty_fan_catalyst', 'sand')
    event.recipes.mekanism.combining('tfmg:heavy_machinery_casing', 'tfmg:steel_casing', 'tfmg:heavy_plate')
    event.recipes.mekanism.combining('create_dd:overburden_casing', 'create:andesite_casing', 'create_dd:bury_blend')
    event.recipes.mekanism.combining('create:andesite_casing', '#forge:stripped_wood', 'create:andesite_alloy')
    event.recipes.mekanism.combining('create:cogwheel', 'create:large_cogwheel', 'create_dd:coal_piece')
    event.recipes.mekanism.combining('create:brass_casing', '#forge:stripped_wood', 'create:brass_ingot')
    event.recipes.mekanism.combining('create_connected:fan_freezing_catalyst', 'create_connected:empty_fan_catalyst', 'powder_snow_bucket')
    event.recipes.mekanism.combining('create_connected:fan_blasting_catalyst', 'create_connected:empty_fan_catalyst', 'lava_bucket')
    event.recipes.mekanism.combining('create_connected:fan_haunting_catalyst', 'create_connected:empty_fan_catalyst', 'soul_sand')
    event.recipes.mekanism.combining('create:brass_casing', '#forge:stripped_logs', 'create:brass_ingot')
    event.recipes.mekanism.combining('create:andesite_casing', '#forge:stripped_logs', 'create:andesite_alloy')
    event.recipes.mekanism.combining('create_connected:fan_splashing_catalyst', 'create_connected:empty_fan_catalyst', 'water_bucket')
    event.recipes.mekanism.combining('create:copper_casing', '#forge:stripped_logs', 'copper_ingot')
    event.recipes.mekanism.combining('create_dd:hydraulic_casing', 'create:copper_casing', 'create:copper_sheet')
    //enrichment
    event.replaceOutput(
        {id: 'mekanism:enriching/conversion/obsidian_to_obsidian_dust'},
        'mekanism:dust_obsidian',
        'create:powdered_obsidian'
    )
    event.recipes.mekanism.enriching('6x tfmg:sulfur_dust', '#forge:ores/sulfur')
    event.recipes.mekanism.enriching('2x kubejs:dust_nickel', '#forge:ores/nickel')
    event.recipes.mekanism.enriching('2x mekanism:dust_lithium','#forge:ores/lithium')
    event.recipes.mekanism.enriching('2x kubejs:dust_tungsten', 'createloveandwar:deepslate_tungsten_ore')
    event.recipes.mekanism.enriching('2x kubejs:dust_desh', '#forge:ores/desh')
    event.recipes.mekanism.enriching('2x kubejs:dust_ostrum', '#forge:ores/ostrum')
    event.recipes.mekanism.enriching('2x kubejs:dust_calorite', '#forge:ores/calorite')
    event.recipes.mekanism.enriching('mekanism:dust_lithium', 'kubejs:dirty_dust_lithium')
    event.recipes.mekanism.enriching('12x kubejs:dust_desh', 'ad_astra:raw_desh_block')
    event.recipes.mekanism.enriching('12x kubejs:dust_ostrum', 'ad_astra:raw_ostrum_block')
    event.recipes.mekanism.enriching('12x kubejs:dust_calorite', 'ad_astra:raw_calorite_block')
    event.recipes.mekanism.enriching('12x kubejs:dust_tungsten', 'createloveandwar:raw_tungsten_block')
    event.recipes.mekanism.enriching('12x mekanism:dust_lithium', 'kubejs:block_raw_lithium')
    event.recipes.mekanism.enriching('12x kubejs:dust_nickel', 'kubejs:block_raw_nickel')
    for (let i = 0; i < 6; i++) {
        event.recipes.mekanism.enriching('kubejs:dust_' + mat[i], 'kubejs:dirty_dust_' + mat[i])
    }
    //sawing
    const logs = ['oak', 'spruce', 'birch', 'jungle', 'acacia', 'dark_oak', 'mangrove', 'cherry']
    for (let i = 0; i < logs.length; i++) {
        event.recipes.mekanism.sawing('stripped_' + logs[i] + '_log', '6x ' + logs[i] + '_planks', Item.of('mekanism:sawdust').withChance(0.25))
        event.recipes.mekanism.sawing('stripped_' + logs[i] + '_wood', '6x ' + logs[i] + '_planks', Item.of('mekanism:sawdust').withChance(0.25))
        event.recipes.mekanism.sawing(logs[i] + '_log', 'stripped_' + logs[i] + '_log', Item.of('mekanism:sawdust').withChance(0.25))
        event.recipes.mekanism.sawing(logs[i] + '_wood', 'stripped_' + logs[i] + '_wood', Item.of('mekanism:sawdust').withChance(0.25))
    }
    event.recipes.mekanism.sawing('bamboo_block', 'stripped_bamboo_block')
    event.recipes.mekanism.sawing('stripped_bamboo_block', '3x bamboo_planks')
    event.recipes.mekanism.sawing('crimson_stem', 'stripped_crimson_stem', Item.of('mekanism:sawdust').withChance(0.25))
    event.recipes.mekanism.sawing('crimson_hyphae', 'stripped_crimson_hyphae', Item.of('mekanism:sawdust').withChance(0.25))
    event.recipes.mekanism.sawing('stripped_crimson_stem', '6x crimson_planks', Item.of('mekanism:sawdust').withChance(0.25))
    event.recipes.mekanism.sawing('stripped_crimson_hyphae', '6x crimson_planks', Item.of('mekanism:sawdust').withChance(0.25))
    event.recipes.mekanism.sawing('warped_stem', 'stripped_warped_stem', Item.of('mekanism:sawdust').withChance(0.25))
    event.recipes.mekanism.sawing('warped_hyphae', 'stripped_warped_hyphae', Item.of('mekanism:sawdust').withChance(0.25))
    event.recipes.mekanism.sawing('stripped_warped_stem', '6x warped_planks', Item.of('mekanism:sawdust').withChance(0.25))
    event.recipes.mekanism.sawing('stripped_warped_hyphae', '6x warped_planks', Item.of('mekanism:sawdust').withChance(0.25))
    event.recipes.mekanism.sawing('ad_astra:stripped_glacian_log', '6x ad_astra:glacian_planks', Item.of('mekanism:sawdust').withChance(0.25))
    event.recipes.mekanism.sawing('ad_astra:glacian_log', 'ad_astra:stripped_glacian_log', Item.of('mekanism:sawdust').withChance(0.25))
    event.recipes.mekanism.sawing('kubejs:polysilicate_ingot', '4x kubejs:polysilicate_sheet')
    event.recipes.mekanism.sawing('createloveandwar:martini_henry', 'createloveandwar:martinicarbine')
    event.recipes.mekanism.sawing('create:andesite_alloy', '6x create:shaft')
    event.recipes.mekanism.sawing('create:shaft', 'create_connected:shear_pin')
    event.recipes.mekanism.sawing('bamboo_planks', 'bamboo_mosaic')
    event.recipes.mekanism.sawing('createloveandwar:lebel', 'createloveandwar:berthier')
    event.recipes.mekanism.sawing('createloveandwar:alof', 'createloveandwar:1887')
    //purifying
    for (let i = 0; i < mat.length; i++) {
        event.recipes.mekanism.purifying('kubejs:clump_' + mat[i], 'kubejs:shard_' + mat[i], '1x mekanism:oxygen')
        event.recipes.mekanism.purifying('3x kubejs:clump_' + mat[i], '#forge:ores/' + mat[i], '1x mekanism:oxygen')
        event.recipes.mekanism.purifying('2x kubejs:clump_' + mat[i], '#forge:raw_materials/' + mat[i], '1x mekanism:oxygen')
        event.recipes.mekanism.purifying('18x kubejs:clump_' + mat[i], '#forge:storage_blocks/raw_' + mat[i], '2x mekanism:oxygen')
    }
    event.recipes.mekanism.purifying('18x kubejs:clump_lithium', 'kubejs:block_raw_lithium', '2x mekanism:oxygen')
    event.recipes.mekanism.purifying('18x kubejs:clump_nickel', 'kubejs:block_raw_nickel', '2x mekanism:oxygen')
    event.recipes.mekanism.purifying('18x kubejs:clump_tungsten', 'createloveandwar:raw_tungsten_block', '2x mekanism:oxygen')
    //injecting
    for (let i = 0; i < mat.length; i++) {
        event.recipes.mekanism.injecting('kubejs:shard_' + mat[i], 'kubejs:crystal_' + mat[i], '1x mekanism:hydrogen_chloride')
        event.recipes.mekanism.injecting('8x kubejs:shard_' + mat[i], '3x #forge:raw_materials/' + mat[i], '1x mekanism:hydrogen_chloride')
        event.recipes.mekanism.injecting('4x kubejs:shard_' + mat[i], '#forge:ores/' + mat[i], '1x mekanism:hydrogen_chloride')
        event.recipes.mekanism.injecting('24x kubejs:shard_' + mat[i], '#forge:storage_blocks/raw_' + mat[i], '2x mekanism:hydrogen_chloride')
    }
    event.recipes.mekanism.injecting('24x kubejs:shard_nickel', 'kubejs:block_raw_nickel', '2x mekanism:hydrogen_chloride')
    event.recipes.mekanism.injecting('24x kubejs:shard_lithium', 'kubejs:block_raw_lithium', '2x mekanism:hydrogen_chloride')
    event.recipes.mekanism.injecting('24x kubejs:shard_tungsten', 'createloveandwar:raw_tungsten_block', '2x mekanism:hydrogen_chloride')
    //painting & extraction
    const dye = ['white', 'red', 'orange', 'yellow', 'green', 'lime', 'cyan', 'blue', 'purple', 'magenta', 'pink', 'light_gray', 'gray', 'brown', 'black', 'light_blue']
    const dyed = ['padded_tiled_rubber', 'padded_rubber', 'padded_rubber_stairs', 'padded_rubber_slab', 'padded_mosaic_rubber', 'plastic', 'industrial_lamp', 'industrial_lamp']
    const dyedmod = ['create_dd:', 'create_dd:', 'create_dd:', 'create_dd:', 'create_dd:', 'createloveandwar:', 'ad_astra:', 'ad_astra:small_']
    const refined = [ 'controller', 'grid', 'crafting_grid', 'pattern_grid', 'fluid_grid', 'network_receiver', 'network_transmitter', 'relay', 'security_manager', 'disk_manipulator', 'crafter', 'crafter_manager', 'crafting_monitor', 'detector', 'wireless_transmitter']
    for (let i = 0; i < dye.length; i++) {
        painting('create:' + dye[i] + '_valve_handle', 'create:valve_handles', 'mekanism:' + dye[i], 32)
        extracting('create:' + dye[i] + '_valve_handle', 'mekanism:' + dye[i], 16)
        painting('create:' + dye[i] + '_toolbox', 'create:toolboxes', 'mekanism:' + dye[i], 32)
        extracting('create:' + dye[i] + '_toolbox', 'mekanism:' + dye[i], 16)
        painting('create:' + dye[i] + '_seat', 'create:seats', 'mekanism:' + dye[i], 256)
        extracting('create:' + dye[i] + '_seat', 'mekanism:' + dye[i], 192)
        painting('create_dd:' + dye[i] + '_asphalt_block', 'create_dd:asphalt_blocks', 'mekanism:' + dye[i], 32)
        extracting('create_dd:' + dye[i] + '_asphalt_block', 'mekanism:' + dye[i], 24)
        painting('ad_astra:' + dye[i] + '_flag', 'ad_astra:flags', 'mekanism:' + dye[i], 256)
        extracting('ad_astra:' + dye[i] + '_flag', 'mekanism:' + dye[i], 192)
        for (let j = 0; j < dyed.length; j++) {
            painting(dyedmod[j] + dye[i] + '_' + dyed[j], dyedmod[j] + dyed[j], 'mekanism:' + dye[i], 32)
            extracting(dyedmod[j] + dye[i] + '_' + dyed[j], 'mekanism:' + dye[i], 16)
        }
    }
    dye.pop()
    for (let i = 0; i < refined.length; i++) {
        for (let j = 0; j < dye.length; j++) {
            painting('refinedstorage:' + dye[j] + '_' + refined[i], 'refinedstorage:' + refined[i], 'mekanism:' + dye[j], 16)
            extracting('refinedstorage:' + dye[j] + '_' + refined[i], 'mekanism:' + dye[j], 8)
        }
        painting('refinedstorage:' + refined[i], 'refinedstorage:' + refined[i], 'mekanism:light_blue', 16)
        extracting('refinedstorage:' + refined[i], 'mekanism:light_blue', 8)
    }
    dye.pop()
    dye.push('light_blue')
    for (let i = 0; i < dye.length; i++) {
            painting('tfmg:' + dye[i] + '_caution_block', 'tfmg:caution_block', 'mekanism:' + dye[i], 32)
            extracting('tfmg:' + dye[i] + '_caution_block', 'mekanism:' + dye[i], 16)
    }
    //rotary
    rotary('tfmg:sulfuric_acid', 'mekanism:sulfuric_acid')
    rotary('tfmg:ethylene', 'mekanism:ethene')
    //reaction
    event.custom({
        "type":"mekanism:reaction","duration":60,"energyRequired":1000,"fluidInput":
        {
            "amount":50,"fluid":"tfmg:ethylene"
        },"gasInput":
        {
            "amount":10,"gas":"mekanism:oxygen"
        },"itemInput":
        {
            "ingredient":
            {
                "item":"mekanism:substrate"
            }
        },"itemOutput":
        {
            "item":"mekanism:hdpe_pellet"
        }
    })
    //dissolution & washing
    for (let i = 0; i < mat.length; i++) {
        dissolution(1, 1, 'forge:ores/' + mat[i], 1000, 'kubejs:dirty_' + mat[i])
        dissolution(1, 3, 'forge:raw_materials/' + mat[i], 2000, 'kubejs:dirty_' + mat[i])
        dissolution(2, 1, 'forge:storage_blocks/raw_' + mat[i], 6000, 'kubejs:dirty_' + mat[i])
        crystallize('kubejs:clean_' + mat[i], 'kubejs:crystal_' + mat[i])
    }
    //centrifuge
})