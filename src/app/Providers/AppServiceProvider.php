<?php

namespace App\Providers;

use App\Models\User;
use Gate;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\ServiceProvider;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     */
    public function register(): void
    {
        //
    }

    /**
     * Bootstrap any application services.
     */
    public function boot(): void
    {
        Model::shouldBeStrict(!app()->isProduction());
        Model::preventSilentlyDiscardingAttributes(false);

        Gate::define('viewPulse', function (User $user) {
            return true; // todo проверка прав доступа
        });
    }
}
