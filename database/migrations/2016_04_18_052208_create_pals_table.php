<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreatePalsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('pals', function (Blueprint $table) {
            $table->integer("sender_id")->unsigned()->index();
            $table->foreign("sender_id")->references("id")->on("users")->onDelete("cascade");

            $table->integer("receiver_id")->unsigned()->index();
            $table->foreign("receiver_id")->references("id")->on("users")->onDelete("cascade");

            $table->boolean("confirmed");
            $table->integer("notifications")->unsigned()->default(0);

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
        Schema::drop('pals');
    }
}
