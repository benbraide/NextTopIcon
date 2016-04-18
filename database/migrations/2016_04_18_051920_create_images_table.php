<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateImagesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('images', function (Blueprint $table) {
            $table->increments('id');

            $table->string('left');
            $table->string('right');

            $table->string('ext', 10);
            $table->string('meta');

            $table->integer('width');
            $table->integer('height');

            $table->integer('x');
            $table->integer('y');

            $table->integer('imageable_id')->unsigned();
            $table->string('imageable_type');

            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::drop('images');
    }
}
