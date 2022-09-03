var fs = require('fs'),
    nbt = require('prismarine-nbt');
const { format } = require('path');
const { stdout } = require('process');

fs.readFile("castle2.mcstructure", function(error, data) {
    if(error) throw error;

    nbt.parse(data, function(error, data) {
        var values = Object.values(data.value.structure.value.palette.value.default.value.block_position_data.value);
        var counter = 0;
        var ylvl = 5;
        for(var x = 0; x < data.value.size.value.value[0]; x++)
        {
            console.log();
            for(var y = 0; y < data.value.size.value.value[1]; y++)
            {
                for(var z = 0; z < data.value.size.value.value[2]; z++)
                {
                    var block = data.value.structure.value.block_indices.value.value[0].value[counter];
                    if(y == ylvl && data.value.structure.value.palette.value.default.value.block_palette.value.value[block].name.value != "minecraft:air")
                    {
                        stdout.write("■");
                    }
                    else if(y == ylvl && data.value.structure.value.palette.value.default.value.block_palette.value.value[block].name.value == "minecraft:air")
                    {
                        stdout.write("□");
                    }
                    counter++;
                }
            }
        }
        console.log(`Size: ${data.value.size.value.value}`)
    });
});

//Block: ${data.value.structure.value.palette.value.default.value.block_palette.value.value[block].name.value} Position: X: ${x} Y: ${y} Z: ${z}