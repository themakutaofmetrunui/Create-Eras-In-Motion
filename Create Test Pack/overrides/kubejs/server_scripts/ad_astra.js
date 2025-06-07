ServerEvents.recipes(event => {
    function press(sheet, sheetcount, ingot, cooktime) {
    event.custom({
      "type": "ad_astra:compressing",
      "cookingtime": cooktime,
      "energy": 20,
      "ingredient": {
        "item": ingot
      },
      "result": {
        "count": sheetcount,
        "id": sheet
      }
    })
    }
    //create
    event.custom({
    "type": "ad_astra:alloying",
    "cookingtime": 100,
    "energy": 20,
    "ingredients": [
      {
        "item": "create:zinc_ingot"
      },
      {
        "item": "copper_ingot"
      }
    ],
    "result": {
        "count": 2,
        "id": "create:brass_ingot"
    }
    })
    //tfmg
    event.custom({
    "type": "ad_astra:alloying",
    "cookingtime": 100,
    "energy": 20,
    "ingredients": [
      {
        "item": "iron_ingot"
      },
      {
        "item": "coal"
      }
    ],
    "result": {
        "count": 1,
        "id": "tfmg:cast_iron_ingot"
    }
    })
    event.custom({
      "type": "ad_astra:alloying",
      "cookingtime": 300,
      "energy": 50,
      "ingredients": [
        {
          "item": "tfmg:coal_coke_dust"
        },
        {
          "item": "tfmg:coal_coke_dust"
        },
        {
          "item": "tfmg:blasting_mixture"
        }
      ],
      "result": {
          "count": 1,
          "id": "tfmg:steel_ingot"
    }
    })
    //RF
    event.custom({
        "type": "ad_astra:alloying",
        "cookingtime": 100,
        "energy": 20,
        "ingredients": [
            {
                "item": "tfmg:coal_coke_dust"
            },
            {
                "item": "mekanism:dust_quartz"
            }
        ],
        "result": {
            "count": 1,
            "id": "refinedstorage:silicon"
        }
    })
    event.custom({
      "type": "ad_astra:alloying",
      "cookingtime": 100,
      "energy": 20,
      "ingredients": [
        {
          "item": "minecraft:iron_ingot"
        },
        {
          "item": "minecraft:iron_ingot"
        },
        {
          "item": "minecraft:iron_ingot"
        },
        {
          "item": "mekanism:dust_quartz"
        }
      ],
      "result": {
          "count": 4,
          "id": "refinedstorage:quartz_enriched_iron"
    }
    })
    event.custom({
      "type": "ad_astra:alloying",
      "cookingtime": 100,
      "energy": 20,
      "ingredients": [
        {
          "item": "refinedstorage:silicon"
        },
        {
          "item": "tfmg:limesand"
        }
      ],
      "result": {
          "count": 1,
          "id": "kubejs:polysilicate_ingot"
        }
    })
    //mekanism
    event.custom({
    "type": "ad_astra:refining",
    "cookingtime": 1,
    "energy": 30,
    "input": {
      "ingredient": {
        "fluid": "minecraft:water"
      },
      "millibuckets": 100
    },
    "result": {
      "fluid": "mekanism:heavy_water",
      "millibuckets": 1
    }
  })
    //ad astra
    press('create:copper_sheet', 1, 'copper_ingot', 100)
    press('create:copper_sheet', 9, 'copper_block', 800)
    press('create:brass_sheet', 1, 'create:brass_ingot', 100)
    press('create:brass_sheet', 9, 'create:brass_block', 800)
    press('create:golden_sheet', 1, 'gold_ingot', 100)
    press('create:golden_sheet', 9, 'gold_block', 800)
    press('createloveandwar:tungsten_sheet', 1, 'createloveandwar:tungsten', 100)
    press('createloveandwar:tungsten_sheet', 9, 'createloveandwar:tungsten_block', 800)
    press('createloveandwar:slime_resin_sheet', 1, 'createloveandwar:slime_resin', 100)
    press('createloveandwar:slime_resin_sheet', 9, 'createloveandwar:slime_resin_block', 800)
    press('createloveandwar:duraplas_sheet', 1, 'createloveandwar:duraplas_ingot', 100)
    press('createloveandwar:duraplas_sheet', 9, 'createloveandwar:block_of_duraplas', 800)
    press('vintageimprovements:aluminum_sheet', 1, 'tfmg:aluminum_ingot', 100)
    press('vintageimprovements:aluminum_sheet', 9, 'tfmg:aluminum_block', 800)
    press('vintageimprovements:andesite_sheet', 1, 'create:andesite_alloy', 100)
    press('vintageimprovements:andesite_sheet', 9, 'create:andesite_alloy_block', 800)
    press('vintageimprovements:bronze_sheet', 1, 'mekanism:ingot_bronze', 100)
    press('vintageimprovements:bronze_sheet', 9, 'mekanism:block_bronze', 800)
    press('vintageimprovements:cast_iron_sheet', 1, 'tfmg:cast_iron_ingot', 100)
    press('vintageimprovements:cast_iron_sheet', 9, 'tfmg:cast_iron_block', 800)
    press('vintageimprovements:lead_sheet', 1, 'tfmg:lead_ingot', 100)
    press('vintageimprovements:lead_sheet', 9, 'tfmg:lead_block', 800)
    press('vintageimprovements:netherite_sheet', 1, 'netherite_ingot', 100)
    press('vintageimprovements:netherite_sheet', 9, 'netherite_block', 800)
    press('vintageimprovements:nickel_sheet', 1, 'tfmg:nickel_ingot', 100)
    press('vintageimprovements:nickel_sheet', 9, 'tfmg:nickel_block', 800)
    press('tfmg:heavy_plate', 1, 'tfmg:steel_ingot', 100)
    press('tfmg:heavy_plate', 9, 'tfmg:steel_block', 800)
    press('vintageimprovements:osmium_sheet', 1, 'mekanism:ingot_osmium', 100)
    press('vintageimprovements:osmium_sheet', 9, 'mekanism:block_osmium', 800)
    press('vintageimprovements:refined_glowstone_sheet', 1, 'mekanism:ingot_refined_glowstone', 100)
    press('vintageimprovements:refined_glowstone_sheet', 9, 'mekanism:block_refined_glowstone', 800)
    press('vintageimprovements:refined_obsidian_sheet', 1, 'mekanism:ingot_obsidian_glowstone', 100)
    press('vintageimprovements:refined_obsidian_sheet', 9, 'mekanism:block_obsidian_glowstone', 800)
    press('vintageimprovements:tin_sheet', 1, 'mekanism:ingot_tin', 100)
    press('vintageimprovements:tin_sheet', 9, 'mekanism:block_tin', 800)
    press('vintageimprovements:uranium_sheet', 1, 'mekanism:ingot_uranium', 100)
    press('vintageimprovements:uranium_sheet', 9, 'mekanism:block_uranium', 800)
    press('vintageimprovements:vanadium_sheet', 1, 'vintageimprovements:vanadium_ingot', 100)
    press('vintageimprovements:vanadium_sheet', 9, 'vintageimprovements:vanadium_block', 800)
    press('createaddition:zinc_sheet', 1, 'create:zinc_ingot', 100)
    press('createaddition:zinc_sheet', 9, 'create:zinc_block', 800)
    press('createaddition:electrum_sheet', 1, 'create:electrum_ingot', 100)
    press('ad_astra:etrium_plate', 1, 'ad_astra:etrium_ingot', 100)
    press('ad_astra:etrium_plate', 9, 'ad_astra:etrium_block', 800)
    event.custom({
    "type": "ad_astra:nasa_workbench",
    "ingredients": [
      {
        "item": "ad_astra:rocket_nose_cone"
      },
      {
        "item": "kubejs:basic_rocket_plating"
      },
      {
        "item": "kubejs:basic_rocket_plating"
      },
      {
        "item": "kubejs:basic_rocket_plating"
      },
      {
        "item": "kubejs:basic_rocket_plating"
      },
      {
        "item": "kubejs:basic_rocket_plating"
      },
      {
        "item": "kubejs:basic_rocket_plating"
      },
      {
        "item": "kubejs:advanced_rocket_plating"
      },
      {
        "item": "ad_astra:desh_tank"
      },
      {
        "item": "mekanism:basic_control_circuit"
      },
      {
        "item": "kubejs:advanced_rocket_plating"
      },
      {
        "item": "ad_astra:rocket_fin"
      },
      {
        "item": "ad_astra:steel_engine"
      },
      {
        "item": "ad_astra:rocket_fin"
      }
    ],
    "result": {
      "count": 1,
      "id": "ad_astra:tier_1_rocket"
    }
    })
    event.custom({
    "type": "ad_astra:refining",
    "cookingtime": 1,
    "energy": 30,
    "input": {
      "ingredient": {
        "fluid": "tfmg:kerosene"
      },
      "millibuckets": 5
    },
    "result": {
      "fluid": "ad_astra:fuel",
      "millibuckets": 5
    }
  })
  event.custom({
    "type": "ad_astra:refining",
    "cookingtime": 1,
    "energy": 30,
    "input": {
      "ingredient": {
        "fluid": "mekanism:hydrogen"
      },
      "millibuckets": 5
    },
    "result": {
      "fluid": "ad_astra:cryo_fuel",
      "millibuckets": 5
    }
  })
})