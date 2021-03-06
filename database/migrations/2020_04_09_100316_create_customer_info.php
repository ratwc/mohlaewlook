<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateCustomerInfo extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('customers', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->string('user_id', 11)->unique(); //PK
            $table->string('username', 32)->unique();
            $table->string('password', 128);
            $table->string('title', 10);
            $table->string('name', 64);
            $table->string('surname', 64);
            $table->date('DOB');
            $table->string('email', 60);

            // $table->primary('user_id');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('customers');
    }
}
