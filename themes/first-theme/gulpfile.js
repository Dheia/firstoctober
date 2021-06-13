var elixir = require('laravel-elixir');
require('laravel-elixir-livereload');

elixir.config.assetsPath = 'assets/';
elixir.config.publicPath = 'assets/compiled/';

elixir(function(mix) {
    mix.sass('app.scss');

    mix.scripts('jquery.js');
    mix.scripts('jquery-ui.min.js');
    mix.scripts('bootstrap.min.js');
    mix.scripts('app.js');

    mix.livereload([
        'themes/first-theme/assets/compiled/css/app.css',
        'themes/first-theme/**/*.htm',
        'themes/first-theme/assets/compiled/js/*.js',
    ]);
});
