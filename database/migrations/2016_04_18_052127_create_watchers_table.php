<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateWatchersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('watchers', function (Blueprint $table) {
            $table->integer("watcher_id")->unsigned()->index();
            $table->foreign("watcher_id")->references("id")->on("users")->onDelete("cascade");

            $table->integer("watched_id")->unsigned()->index();
            $table->foreign("watched_id")->references("id")->on("users")->onDelete("cascade");

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
        Schema::drop('watchers');
    }
}
