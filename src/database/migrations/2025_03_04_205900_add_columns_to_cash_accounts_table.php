<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::table('cash_accounts', function (Blueprint $table) {
            $table->bigInteger('order')->default(500);
            $table->foreignIdFor(\App\Models\User::class)->constrained();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('cash_accounts', function (Blueprint $table) {
            $table->dropColumn('order');
            $table->dropConstrainedForeignIdFor(\App\Models\User::class);
        });
    }
};
