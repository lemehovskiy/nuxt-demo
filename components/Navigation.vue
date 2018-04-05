<template>

    <header>
        <div class="container">
            <div class="lem-navbar-head">
                <a class="logo" href="/">
                    NUXT DEMO
                </a>
                <button type="button" class="lem-navbar-toggle">
                    <div class="animate-burger">
                        <span class="top"></span>
                        <span class="middle"></span>
                        <span class="bottom"></span>
                    </div>
                </button>
            </div>

            <div class="lem-navbar-collapse">

                <ul class="nav">
                    <li class="menu-item">
                        <nuxt-link exact to="/">Home</nuxt-link>
                    </li>

                    <li class="menu-item">
                        <nuxt-link to="/about">About</nuxt-link>
                    </li>

                    <li class="menu-item">
                        <nuxt-link to="/contact">Contact</nuxt-link>
                    </li>
                </ul>
            </div>
        </div>
    </header>

</template>

<style lang="scss">

    $mobile-menu-breakpoint: 800px;
    $menu-background-color: #0E524A;
    $menu-font-color: white;

    .lem-navbar-head {
        display: flex;
        justify-content: space-between;
        width: 100%;

        .lem-navbar-toggle {
            @media (min-width: $mobile-menu-breakpoint + 1) {
                display: none;
            }

            border: none;
            background: transparent;

            &:hover {
                background: transparent;
                .animate-burger {
                    .top {
                        transform: translateY(-3px);
                    }
                    .bottom {
                        transform: translateY(3px);
                    }
                }
            }
            &.open {
                .animate-burger {
                    .top {
                        transform: translateY(7px) rotate(-45deg);
                    }
                    .middle {
                        transform: translateX(10px);
                        opacity: 0;
                    }
                    .bottom {
                        transform: translateY(-7px) rotate(45deg);
                    }
                }
            }
            .animate-burger {
                display: inline-block;
                position: relative;
                width: 24px;
                height: 16px;
                span {
                    position: absolute;
                    width: 100%;
                    height: 2px;
                    background-color: $menu-font-color;
                    left: 0;
                    transition: transform .5s, opacity .6s;
                }
                .top {
                    top: 0;
                }
                .middle {
                    top: 50%;
                    margin-top: -1px;
                }
                .bottom {
                    bottom: 0;
                }
            }
        }

    }

    .lem-navbar-collapse {

        @media (min-width: $mobile-menu-breakpoint + 1) {
            display: block !important;
        }

        @media (max-width: $mobile-menu-breakpoint) {
            overflow: hidden;
            height: 0;
        }
    }

    header {
        position: fixed;
        left: 0;
        top: 0;
        width: 100%;
        z-index: 100;
        background: $menu-background-color;

        .extra-trigger {
            width: 30px;
            height: 30px;
            font-size: 30px;
            position: absolute;
            right: 0;
            top: 0;
            display: block;

            @media (min-width: $mobile-menu-breakpoint + 1px) {
                display: none;
            }
        }

        .container {
            padding: 0 20px;

            @media (min-width: $mobile-menu-breakpoint + 1) {
                display: flex;
                justify-content: space-between;
            }
        }

        .logo {
            font-size: 26px;
            text-transform: uppercase;
            font-weight: 700;
            text-decoration: none;
            color: white;
            display: block;
            padding: 14px 0;
        }

        .nav {
            @media (min-width: $mobile-menu-breakpoint + 1) {
                display: flex;
            }

            a {
                text-decoration: none;
                display: block;
            }


            >li {
                position: relative;
                @media (max-width: $mobile-menu-breakpoint) {
                    padding: 0 40px 0 0;
                }

                >a {
                    color: $menu-font-color;
                    padding: 20px 30px;
                    display: block;
                    transition: .5s;

                    &.nuxt-link-active {
                        background: rgba(white, 0.3);
                    }

                    @media (max-width: $mobile-menu-breakpoint) {
                        padding: 20px 0;
                    }
                }
            }
        }
    }

</style>

