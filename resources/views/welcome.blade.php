<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title>Laravel</title>

        <!-- Fonts -->
        <link rel="preconnect" href="https://fonts.bunny.net">
        <link href="https://fonts.bunny.net/css?family=figtree:400,600&display=swap" rel="stylesheet" />


        @vite('resources/my_js/app.js')
    </head>
    <body>
        <div>
            <header class="grid grid-cols-2 items-center gap-2 py-10 lg:grid-cols-3">

                <nav class="-mx-3 flex flex-1 justify-end">
                    <router-link to="/admin" class="rounded-md px-3 py-2">
                        Dashboard
                    </router-link>
                    {{-- <a href="{{ url('/') }}" class="rounded-md px-3 py-2">
                        Dashboard
                    </a> --}}
                    {{-- <a href="{{ route('login') }}" class="rounded-md px-3 py-2">
                        Log in
                    </a>

                    <a href="{{ route('register') }}" class="rounded-md px-3 py-2">
                        Register
                    </a> --}}
                </nav>


            </header>
        </div>
    </body>
</html>
