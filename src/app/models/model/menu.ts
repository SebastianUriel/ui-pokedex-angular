export class Menu {
    data: any[];

    constructor() {
        this.data = [
            {
                "id":"home",
                "name": "Home",
                "path": "/",
                "icon": "bi bi-house",
                "sub_levels": null
            },
            {
                "id":"berries",
                "name": "Berries",
                "path": "/berries",
                "icon": "bi bi-basket",
                "sub_levels": [
                    {
                        "name": "Berry firmnesses",
                        "path": "/berry-firmnesses",
                        "icon": "bi bi-basket2-fill"
                    },
                    {
                        "name": "Berry flavors",
                        "path": "/berry-flavors",
                        "icon": "bi bi-basket2-fill"
                    }
                ]
            },
            {
                "id":"contests",
                "name": "Contests",
                "path": "/contests",
                "icon": "bi bi-boombox",
                "sub_levels": [
                    {
                        "name": "Contest types",
                        "path": "/contest-type",
                        "icon": "bi bi-list-columns-reverse"
                    },
                    {
                        "name": "Contest effects",
                        "path": "/contest-effect",
                        "icon": "bi bi-clipboard2-data-fill"
                    },
                    {
                        "name": "Super contest effect",
                        "path": "/super-contest-effect",
                        "icon": "bi bi-clipboard2-data-fill"
                    }
                ]
            },
            {
                "id":"encounters",
                "name": "Encounters",
                "path": "/encounters",
                "icon": "bi bi-exclamation-circle-fill",
                "sub_levels": [
                    {
                        "name": "Encounter methods",
                        "path": "/encounter-methods",
                        "icon": "bi bi-signpost-2"
                    },
                    {
                        "name": "Encounter conditions",
                        "path": "/encounter-conditions",
                        "icon": "bi bi-check-square"
                    },
                    {
                        "name": "Encounter condition values",
                        "path": "/encounter-condition-values",
                        "icon": "bi bi-card-checklist"
                    }
                ]
            },
            {
                "id":"evolution",
                "name": "Evolution",
                "path": "/evolution",
                "icon": "bi bi-file-arrow-up",
                "sub_levels": [
                    {
                        "name": "Evolution chains",
                        "path": "/evolution-chains",
                        "icon": "bi bi-bar-chart-steps"
                    },
                    {
                        "name": "Evolution triggers",
                        "path": "/evolution-triggers",
                        "icon": "bi bi-activity"
                    }
                ]
            },
            {
                "id":"games",
                "name": "Games",
                "path": "/games",
                "icon": "bi bi-controller",
                "sub_levels": [
                    {
                        "name": "Generations",
                        "path": "/generations",
                        "icon": "bi bi-arrow-bar-up"
                    },
                    {
                        "name": "Pokedexes",
                        "path": "/pokedexes",
                        "icon": "bi bi-file-spreadsheet"
                    },
                    {
                        "name": "Version",
                        "path": "/version",
                        "icon": "bi bi-file-diff"
                    },
                    {
                        "name": "Version groups",
                        "path": "/version-groups",
                        "icon": "bi bi-collection"
                    }
                ]
            },
            {
                "id":"items",
                "name": "Items",
                "path": "/items",
                "icon": "bi bi-capsule",
                "sub_levels": [
                    {
                        "name": "Item attributes",
                        "path": "/item-attributes",
                        "icon": "bi bi-list-columns-reverse"
                    },
                    {
                        "name": "Item categories",
                        "path": "/item-categories",
                        "icon": "bi bi-bookmark-check"
                    },
                    {
                        "name": "Item fling effects",
                        "path": "/item-fling-effects",
                        "icon": "bi bi-capsule-pill"
                    },
                    {
                        "name": "Item pockets",
                        "path": "/item-pockets",
                        "icon": "bi bi-wallet-fill"
                    }
                ]
            },
            {
                "id":"locations",
                "name": "Locations",
                "path": "/locations",
                "icon": "bi bi-geo-alt",
                "sub_levels": [
                    {
                        "name": "Location areas",
                        "path": "/location-areas",
                        "icon": "bi bi-geo-fill"
                    },
                    {
                        "name": "Pal park areas",
                        "path": "/pal-park-areas",
                        "icon": "bi bi-map"
                    },
                    {
                        "name": "Regions",
                        "path": "/regions",
                        "icon": "bi bi-globe-americas"
                    }
                ]
            },
            {
                "id":"machines",
                "name": "Machines",
                "path": "/machines",
                "icon": "bi bi-robot",
                "sub_levels": null
            },
            {
                "id":"moves",
                "name": "Moves",
                "path": "/moves",
                "icon": "bi bi-disc",
                "sub_levels": [
                    {
                        "name": "Move ailments",
                        "path": "/move-ailments",
                        "icon": "bi bi-disc-fill"
                    },
                    {
                        "name": "Move battle styles",
                        "path": "/move-battle-styles",
                        "icon": "bi bi-disc-fill"
                    },
                    {
                        "name": "Move categories",
                        "path": "/move-categories",
                        "icon": "bi bi-disc-fill"
                    },
                    {
                        "name": "Move damage classes",
                        "path": "/move-damage-classes",
                        "icon": "bi bi-disc-fill"
                    },
                    {
                        "name": "Move learn methods",
                        "path": "/move-learn-methods",
                        "icon": "bi bi-disc-fill"
                    },
                    {
                        "name": "Move targets",
                        "path": "/move-targets",
                        "icon": "bi bi-disc-fill"
                    }
                ]
            },
            {
                "id":"pokemon",
                "name": "Pokemon",
                "path": "/pokemon",
                "icon": "bi bi-hdd-stack",
                "sub_levels": [
                    {
                        "name": "Abilities",
                        "path": "/abilities",
                        "icon": "bi bi-ticket-detailed"
                    },
                    {
                        "name": "Characteristics",
                        "path": "/characteristics",
                        "icon": "bi bi-person-lines-fill"
                    },
                    {
                        "name": "Egg groups",
                        "path": "/egg-groups",
                        "icon": "bi bi-egg-fill"
                    },
                    {
                        "name": "Genders",
                        "path": "/genders",
                        "icon": "bi bi-gender-ambiguous"
                    },
                    {
                        "name": "Growth rates",
                        "path": "/growth-rates",
                        "icon": "bi bi-aspect-ratio"
                    },
                    {
                        "name": "Natures",
                        "path": "/natures",
                        "icon": "bi bi-envelope-open"
                    },
                    {
                        "name": "Pokeathlon stats",
                        "path": "/pokeathlon-stats",
                        "icon": "bi bi-device-ssd"
                    },
                    {
                        "name": "Pokemon location areas",
                        "path": "/pokemon-location-areas",
                        "icon": "bi bi-map"
                    },
                    {
                        "name": "Pokemon colors",
                        "path": "/pokemon-colors",
                        "icon": "bi bi-palette"
                    },
                    {
                        "name": "Pokemon forms",
                        "path": "/pokemon-forms",
                        "icon": "bi bi-code-square"
                    },
                    {
                        "name": "Pokemon habitats",
                        "path": "/pokemon-habitats",
                        "icon": "bi bi-back"
                    },
                    {
                        "name": "Pokemon shapes",
                        "path": "/pokeathlon-shapes",
                        "icon": "bi bi-diamond-half"
                    },
                    {
                        "name": "Pokemon species",
                        "path": "/pokemon-species",
                        "icon": "bi bi-speaker-fill"
                    },
                    {
                        "name": "Stats",
                        "path": "/stats",
                        "icon": "bi bi-bar-chart-line"
                    },
                    {
                        "name": "Types",
                        "path": "/types",
                        "icon": "bi bi-diagram-2"
                    }
                ]
            }
        ];
    }

}