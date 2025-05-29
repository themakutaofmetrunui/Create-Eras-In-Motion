ServerEvents.recipes(event => {
  event.recipes.create.crushing('mekanism:dust_iron', 'iron_ingot')
  //moreburners
  event.recipes.create.deploying('moreburners:nickel_coil', ['moreburners:copper_coil', 'tfmg:nickel_ingot'])
  event.recipes.create.pressing('moreburners:copper_coil', 'vintageimprovements:copper_spring')
  //create dreams and desires
  event.recipes.create.mixing(Fluid.of('kubejs:accelerator', 250), ['2x warped_fungus', '2x crimson_fungus']).heated()
  event.recipes.create.mixing(['create_dd:rubber', Fluid.of('kubejs:accelerator', 100)], [Fluid.of('kubejs:accelerator', 100), Fluid.of('tfmg:liquid_plastic', 250), 'tfmg:sulfur_dust']).heated()
  //create love and war
  event.custom({
            "type": "tfmg:casting",
            "ingredients": [
              {
                "fluid": "kubejs:slime_resin",
                "amount": 1
              }
            ],
            "processingTime": 200,
            "results": [
              {
                "count": 1,
                "item": "createloveandwar:slime_resin"
              }
            ,
              {
                "count": 1,
                "item": "createloveandwar:slime_resin_block"
              }
          
            ]
  })
  event.custom({
        "type": "tfmg:casting",
        "ingredients": [
          {
            "fluid": "createloveandwar:duraplas",
            "amount": 1
          },
          {
            "count": 1,
            "item": "create:powdered_obsidian"
          }
        ],
        "processingTime": 200,
        "results": [
          {
            "count": 1,
            "item": "createloveandwar:duraplas_ingot"
          }
        ,
          {
            "count": 1,
            "item": "createloveandwar:block_of_duraplas"
          }
      
        ]
  })
  event.recipes.create.mixing(Fluid.of('kubejs:slime_resin', 250), ['sugar', 'slime_ball']).heated()
  event.recipes.create.mixing(Fluid.of('createloveandwar:duraplas', 250), [Fluid.of('tfmg:liquid_plastic', 250), 'create:powdered_obsidian'])
  event.recipes.create.compacting('createloveandwar:fuel_pellet', Fluid.of('tfmg:diesel'))
  //create additions
  function biofuel(number, bio) {
    event.recipes.create.mixing((number + 'x mekanism:bio_fuel'), [bio, Fluid.of('createaddition:seed_oil', 100)]).heated()
  }
  biofuel('2', '#minecraft:leaves')
  biofuel('5', '#minecraft:flowers')
  biofuel('4', '#createaddition:plants')
  biofuel('5', '#forge:crops')
  biofuel('2', '#minecraft:saplings')
  biofuel('2', 'honeycomb')
  biofuel('4', '#createaddition:plant_foods')
  biofuel('2', '8x stick')
  event.recipes.create.milling('2x mekanism:bio_fuel', '#forge:seeds')
  //create tfmg
  event.recipes.create.mixing(['createloveandwar:catalyst', Fluid.of('tfmg:ethylene', 100)], ['createloveandwar:catalyst', Fluid.of('tfmg:kerosene', 100)]).heated()
  event.recipes.create.mixing([Fluid.of('tfmg:liquid_plastic', 500), 'createloveandwar:catalyst'], ['createloveandwar:catalyst', Fluid.of('tfmg:ethylene', 500)])
  event.recipes.create.mixing([Fluid.of('tfmg:liquid_plastic', 500), 'createloveandwar:catalyst'], ['createloveandwar:catalyst', Fluid.of('tfmg:propylene', 500)])
  event.recipes.create.mixing(Fluid.of('tfmg:crude_oil', 100), ['createloveandwar:tar_clump', Fluid.water(100)]).heated()
  event.recipes.create.crushing('vintageimprovements:copper_sulfate', 'tfmg:copper_sulfate')
  for (let i = 0; i < gas.length; i++) {
    event.recipes.vintageimprovements.vacuumizing('tfmg:' + gas[i] + '_bucket', [Fluid.of('tfmg:' + gas[i]), 'bucket'])
  }
  event.recipes.vintageimprovements.pressurizing('tfmg:air_bucket', 'bucket')
  event.recipes.vintageimprovements.pressurizing([Fluid.of('tfmg:neon', 10), 'charcoal'], 'charcoal').processingTime(10000).secondaryFluidOutput(0)
  event.recipes.vintageimprovements.pressurizing('tfmg:copper_sulfate', ['copper_ingot', Fluid.of('tfmg:sulfuric_acid', 200), Fluid.water(200)])
  event.recipes.vintageimprovementsHammering(Item.of('tfmg:heavy_plate',), 'tfmg:steel_ingot', 3)
  event.custom({
      "type":"createaddition:rolling",
      "input": {
        "item": "tfmg:steel_ingot"
      },
      "result": {
        "item": "tfmg:rebar",
        "count": 2
      }
  })
  //vintage improvements
  event.recipes.vintageimprovements.pressurizing([Fluid.of('mekanism:sulfur_trioxide', 250), 'iron_nugget'], [Fluid.of('mekanism:sulfur_dioxide'), 'iron_nugget']).secondaryFluidOutput(0).superheated().processingTime(400)
  event.recipes.vintageimprovements.pressurizing([Fluid.of('mekanism:sulfur_trioxide', 250), 'vintageimprovements:vanadium_nugget'], [Fluid.of('mekanism:sulfur_dioxide'), 'vintageimprovements:vanadium_nugget']).secondaryFluidOutput(0).heated().processingTime(400)
  event.recipes.vintageimprovements.pressurizing(Fluid.of('mekanism:sulfur_dioxide', 1000), 'tfmg:sulfur_dust').secondaryFluidOutput(0).processingTime(600)
  event.recipes.vintageimprovements.pressurizing(Fluid.of('tfmg:sulfuric_acid', 1000), [Fluid.of('water', 1000), Fluid.of('mekanism:sulfur_trioxide', 1000)]).processingTime(600).secondaryFluidInput(0)
  //RF
  event.recipes.create.cutting('3x kubejs:polysilicate_sheet', 'kubejs:polysilicate_ingot')
  event.recipes.vintageimprovements.pressurizing(Fluid.of('kubejs:molten_silicon', 112), ['tfmg:coal_coke_dust', 'mekanism:dust_quartz']).processingTime(1000).superheated()
  event.recipes.vintageimprovements.pressurizing(Fluid.of('kubejs:molten_polysilicate', 112), ['refinedstorage:silicon', 'tfmg:limesand']).processingTime(1000).superheated()
  event.recipes.vintageimprovements.pressurizing(Fluid.of('kubejs:molten_quartz_enriched_iron', 112), ['mekanism:dust_iron', 'mekanism:dust_iron', 'mekanism:dust_iron', 'mekanism:dust_quartz']).processingTime(1000).superheated()
  event.custom({
    "type": "tfmg:casting",
    "ingredients": [
      {
        "fluid": "kubejs:molten_silicon",
        "amount": 1
      },
    ],
    "processingTime": 200,
    "results": [
      {
        "count": 1,
        "item": "refinedstorage:silicon"
      }
    ]
  })
  event.custom({
    "type": "tfmg:casting",
    "ingredients": [
      {
        "fluid": "kubejs:molten_polysilicate",
        "amount": 1
      },
    ],
    "processingTime": 200,
    "results": [
      {
        "count": 1,
        "item": "kubejs:polysilicate_ingot"
      }
    ]
  })
  event.custom({
    "type": "tfmg:casting",
    "ingredients": [
      {
        "fluid": "kubejs:molten_quartz_enriched_iron",
        "amount": 1
      },
    ],
    "processingTime": 200,
    "results": [
      {
        "count": 1,
        "item": "refinedstorage:quartz_enriched_iron"
      },
      {
        "count": 1,
        "item": "refinedstorage:quartz_enriched_iron_block"
      }
    ]
  })
  event.recipes.create.crushing('mekanism:dust_quartz', 'quartz')
    event.custom({
      "type": "create:item_application",
      "ingredients": [
      {
      "tag": "minecraft:stone_tool_materials"
      },
      {
      "item": "refinedstorage:quartz_enriched_iron"
      }
    ],
    "results": [
      {
      "item": "refinedstorage:machine_casing"
      }
    ]
    })
    //create teleporters
    event.custom({
      "type": "create:item_application",
      "ingredients": [
        {
          "item": "create:brass_casing"
        },
        {
          "item": "createteleporters:quantum_fluid_bucket"
        }
      ],
      "results": [
        {
          "item": "createteleporters:quantum_casing"
        },
      ]
    })
    //mekanism
    event.recipes.vintageimprovementsHammering(Item.of('vintageimprovements:osmium_sheet', 1), 'mekanism:ingot_osmium', 3)
    event.recipes.create.pressing('kubejs:magnetic_plate', 'tfmg:magnetic_ingot')
    event.custom({
      "type":"createaddition:rolling",
      "input": {
            "item": "tfmg:magnetic_ingot"
      },
      "result": {
        "item": "kubejs:magnetic_rod",
        "count": 2
      }
  })
  event.custom({
    "type":"createaddition:rolling",
    "input": {
          "item": "kubejs:magnetic_plate"
    },
    "result": {
      "item": "kubejs:magnetic_wire",
      "count": 2
    }
  })
  //crushing uniformity
  const oretype = ["tin", "osmium", "uranium", "lead", "nickel", "lithium", "tungsten"]
  const oremod = ["mekanism", "mekanism", "mekanism", "mekanism", "tfmg", "tfmg", "createloveandwar"]
  const crushmod = ["create", "create", "create", "create", "create", "kubejs", "kubejs"]
  for (let i = 0; i < oretype.length; i++) {
    event.recipes.create.crushing([Item.of('2x ' + crushmod[i] + ':crushed_raw_' + oretype[i]), Item.of(crushmod[i] + ':crushed_raw_' + oretype[i]).withChance(0.25), Item.of('create:experience_nugget').withChance(0.75), Item.of('cobbled_deepslate').withChance(0.12)], (oremod[i] + ':deepslate_' + oretype[i] + '_ore'))
    event.recipes.create.crushing([Item.of(crushmod[i] + ':crushed_raw_' + oretype[i]), Item.of(crushmod[i] + ':crushed_raw_' + oretype[i]).withChance(0.25), Item.of('create:experience_nugget').withChance(0.75), Item.of('cobbled_deepslate').withChance(0.12)], (oremod[i] + ':' + oretype[i] + '_ore'))
    event.recipes.create.crushing([Item.of(crushmod[i] + ':crushed_raw_' + oretype[i]), Item.of(crushmod[i] + ':crushed_raw_' + oretype[i]).withChance(0.25), Item.of('create:experience_nugget').withChance(0.75), Item.of('cobbled_deepslate').withChance(0.12)], ('mekanismaaa:moon_' + oretype[i] + '_ore'))
    event.recipes.create.crushing([Item.of(crushmod[i] + ':crushed_raw_' + oretype[i]), Item.of(crushmod[i] + ':crushed_raw_' + oretype[i]).withChance(0.25), Item.of('create:experience_nugget').withChance(0.75), Item.of('cobbled_deepslate').withChance(0.12)], ('mekanismaaa:mars_' + oretype[i] + '_ore'))
    event.recipes.create.crushing([Item.of(crushmod[i] + ':crushed_raw_' + oretype[i]), Item.of(crushmod[i] + ':crushed_raw_' + oretype[i]).withChance(0.25), Item.of('create:experience_nugget').withChance(0.75), Item.of('cobbled_deepslate').withChance(0.12)], ('mekanismaaa:mercury_' + oretype[i] + '_ore'))
    event.recipes.create.crushing([Item.of(crushmod[i] + ':crushed_raw_' + oretype[i]), Item.of(crushmod[i] + ':crushed_raw_' + oretype[i]).withChance(0.25), Item.of('create:experience_nugget').withChance(0.75), Item.of('cobbled_deepslate').withChance(0.12)], ('mekanismaaa:venus_' + oretype[i] + '_ore'))
    event.recipes.create.crushing([Item.of(crushmod[i] + ':crushed_raw_' + oretype[i]), Item.of(crushmod[i] + ':crushed_raw_' + oretype[i]).withChance(0.25), Item.of('create:experience_nugget').withChance(0.75), Item.of('cobbled_deepslate').withChance(0.12)], ('mekanismaaa:glacio_' + oretype[i] + '_ore'))
  }
  event.recipes.create.crushing(['3x tfmg:sulfur_dust', Item.of('create:experience_nugget').withChance(0.75), Item.of('netherrack').withChance(0.12)], 'createloveandwar:nether_sulphur_ore')
  event.recipes.create.crushing(['3x tfmg:sulfur_dust', Item.of('tfmg:sulfur_dust').withChance(0.25), Item.of('create:experience_nugget').withChance(0.75), Item.of('cobblestone').withChance(0.12)], 'createloveandwar:sulphur_ore')
  event.recipes.create.crushing(['5x tfmg:sulfur_dust', Item.of('tfmg:sulfur_dust').withChance(0.25), Item.of('create:experience_nugget').withChance(0.75), Item.of('cobbled_deepslate').withChance(0.12)], 'createloveandwar:deepslate_sulphur_ore')
  event.recipes.create.crushing(['3x mekanism:fluorite_gem', Item.of('mekanism:fluorite_gem').withChance(0.25), Item.of('create:experience_nugget').withChance(0.75), Item.of('cobblestone').withChance(0.12)], 'mekanism:fluorite_ore')
  event.recipes.create.crushing(['5x mekanism:fluorite_gem', Item.of('mekanism:fluorite_gem').withChance(0.25), Item.of('create:experience_nugget').withChance(0.75), Item.of('cobbled_deepslate').withChance(0.12)], 'mekanism:deepslate_fluorite_ore')
  event.recipes.create.crushing(['kubejs:crushed_raw_lithium', Item.of('create:experience_nugget').withChance(0.75)], 'tfmg:raw_lithium')
  event.recipes.create.crushing(['kubejs:crushed_raw_tungsten', Item.of('create:experience_nugget').withChance(0.75)], 'createloveandwar:raw_tungsten')
  event.recipes.create.crushing('mekanism:dust_copper', 'copper_ingot')
  event.recipes.create.crushing('mekanism:dust_gold', 'gold_ingot')
  event.recipes.create.crushing('mekanism:dust_emerald', 'emerald')
  event.recipes.create.crushing('mekanism:dust_coal', 'coal')
  event.recipes.create.crushing('mekanism:dust_charcoal', 'charcoal')
  event.recipes.create.crushing('mekanism:dust_lapis_lazuli', 'lapis_lazuli')
  event.replaceOutput(
    {id: 'createaddition:crushing/diamond'},
    'createaddition:diamond_grit',
    'mekanism:dust_diamond'
  )
  event.recipes.create.crushing('mekanism:dust_tin', 'mekanism:ingot_tin')
  event.recipes.create.crushing('mekanism:dust_osmium', 'mekanism:ingot_osmium')
  event.recipes.create.crushing('mekanism:dust_uranium', 'mekanism:ingot_uranium')
  event.recipes.create.crushing('mekanism:dust_fluorite', 'mekanism:fluorite_gem')
  event.recipes.create.crushing('mekanism:dust_lead', 'tfmg:lead_ingot')
  event.recipes.create.crushing('mekanism:dust_netherite', 'netherite_ingot')
  event.recipes.create.crushing('mekanism:dust_bronze', 'mekanism:ingot_bronze')
  event.recipes.create.crushing('mekanism:dust_steel', 'tfmg:steel_ingot')
  event.recipes.create.crushing('kubejs:dust_nickel', 'tfmg:nickel_ingot')
  event.recipes.create.crushing('mekanism:dust_lithium', 'tfmg:lithium_ingot')
  event.recipes.create.crushing('kubejs:dust_zinc', 'create:zinc_ingot')
  event.recipes.create.crushing('kubejs:dust_tungsten', 'createloveandwar:tungsten')
  event.recipes.create.crushing('kubejs:dust_desh', 'ad_astra:desh_ingot')
  event.recipes.create.crushing('kubejs:dust_ostrum', 'ad_astra:ostrum_ingot')
  event.recipes.create.crushing('kubejs:dust_calorite', 'ad_astra:calorite_ingot')
  event.recipes.create.crushing('kubejs:dust_ice_shard', 'ad_astra:ice_shard')
  event.recipes.create.crushing(['9x kubejs:crushed_raw_tungsten', Item.of('create:experience_nugget', 9).withChance(0.75)], 'createloveandwar:raw_tungsten_block')
  event.recipes.create.crushing(['9x create:crushed_raw_nickel', Item.of('create:experience_nugget', 9).withChance(0.75)], 'kubejs:block_raw_nickel')
  event.recipes.create.crushing(['9x kubejs:crushed_raw_lithium', Item.of('create:experience_nugget', 9).withChance(0.75)], 'kubejs:block_raw_lithium')
  event.recipes.create.crushing(['9x tfmg:sulfur_dust', Item.of('create:experience_nugget', 9).withChance(0.75)], 'createloveandwar:raw_sulphur_block')
  const mat = ['calorite', 'desh', 'nickel', 'ostrum', 'tungsten', 'zinc', 'lithium', 'copper', 'gold', 'iron', 'tin', 'osmium', 'uranium', 'lead']
  for (let i = 0; i < 7; i++) {
    event.recipes.create.crushing('kubejs:dirty_dust_' + mat[i], 'kubejs:clump_' + mat[i])
  }
  for (let i = 7; i < mat.length; i++) {
    event.recipes.create.crushing('mekanism:dirty_dust_' + mat[i], 'mekanism:clump_' + mat[i])
  }
  //ad astra
  event.recipes.vintageimprovementsHammering(Item.of('ad_astra:desh_plate', 1), 'ad_astra:desh_ingot', 3)
  event.recipes.vintageimprovementsHammering(Item.of('ad_astra:ostrum_plate', 1), 'ad_astra:ostrum_ingot', 3)
  event.recipes.vintageimprovementsHammering(Item.of('ad_astra:calorite_plate', 1), 'ad_astra:calorite_ingot', 3)
})