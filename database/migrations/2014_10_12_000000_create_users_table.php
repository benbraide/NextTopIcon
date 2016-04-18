<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateUsersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('users', function (Blueprint $table) {
            $table->increments('id');
            $table->boolean('sex');
            $table->date('birthdate');
            $table->string('name');
            $table->text('info');
            $table->string('alias');
            $table->string('email')->unique();
            $table->string('password', 60);
            $table->string('location');
            $table->string('corporate_title');
            $table->string('corporate');
            $table->string('perma_l');
            $table->string('perma_r');
            $table->integer('permissions')->unsigned()->default(0);
            $table->rememberToken();
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
        Schema::drop('users');
    }
}
