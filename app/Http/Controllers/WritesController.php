<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Write;
use TCG\Voyager\Models\Category;


class WritesController extends Controller
{
    public function getWrites(String $slug){
        $category = Category::where('slug', $slug)->first();
        if(!$category) {
            return response()->json(['msg' => 'Kategori bulunamad─▒', 404]);
        }
        $data = Write::where('category_id' , $category->id)->paginate(12);
        $data->map(function($item){
            $item->image = url(
                sprintf(
                    "storage/%s",
                    str_replace('\\', '/', $item->image)
                )
            );
        });

        return response()->json($data);
    }
    public function getWritesDetails(string $slug){
        $write = Write::where('slug', $slug)->first();
        if(!$write) {
            return response()->json(['message' => 'not found'], 404);
        }
        $write->category = Category::where('id', $write->id)->first();
        $write->image = url(
                sprintf(
                    "storage/%s",
                    str_replace('\\', '/', $write->image)
                )
            );

        return response()->json($write);
    }
}
