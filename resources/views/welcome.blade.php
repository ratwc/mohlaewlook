<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">

        <script type="text/javascript">window.csrf_token = "{{ csrf_token() }}"</script>
        <title>{{ config('APP_NAME','Mohlaewlook') }}</title>

        <script src="https://unpkg.com/vue-multiselect@2.1.0"></script>
        <link rel="stylesheet" href="https://unpkg.com/vue-multiselect@2.1.0/dist/vue-multiselect.min.css">
        <!-- Fonts -->
        <link rel="stylesheet" href="https://pro.fontawesome.com/releases/v5.10.0/css/all.css" integrity="sha384-AYmEC3Yw5cVb3ZcuHtOA93w35dYTsvhLPVnYs9eStHfGJvOvKxVfELGroGkvsg+p" crossorigin="anonymous"/>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Nunito:200,600" >
        <!-- Styles -->
        <link rel="stylesheet" href="{{asset('css/app.css')}}">
        <link rel="stylesheet" href="{{asset('css/main.css')}}">
        <link rel="stylesheet" href="{{asset('css/admin.css')}}">

    </head>
    <body>

        <section class="section">
            <div id="app">
                <header  v-show="$route.path==='/' || $route.path==='/login' || $route.path==='/register' ||$route.path==='/info'||$route.path==='/reservation'? true:false">
                    <navbar :links="navbarlinks" ></navbar>
                    <br>
                </header>

                <router-view csrf="{{csrf_token()}}" ></router-view>

                <footer v-show="$route.path==='/' || $route.path==='/login' || $route.path==='/register' ||$route.path==='/info'||$route.path==='/reservation' ? true:false">

                    <app-footer :links ="footerlinks"></app-footer>
                </footer>

            </div>
        </section>

    </body>

    <script src="{{ asset('js/app.js') }}"></script>
</html>
