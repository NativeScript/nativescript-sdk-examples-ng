export class GroupTitle {
    constructor(public title: string) { }
}

var mockedDescription = "Cras ut turpis mollis, vestibulum leo a, eleifend enim. Nam rutrum justo vestibulum dignissim tempor. Cras ac consequat ante. Nullam malesuada vulputate leo fringilla consectetur. In ligula felis, pharetra nec lacus ornare, laoreet pellentesque odio.";

var mockedDescriptionType2 = "Nunc vel augue quam. Phasellus pharetra lobortis nulla, at tincidunt augue consectetur sit amet. Praesent eget tellus diam. Suspendisse potenti. Praesent commodo lacinia consectetur. Pellentesque lacinia accumsan semper.";

var mockedDescriptionType3 = "Nulla convallis urna eu est tristique, in ullamcorper sapien rutrum. Donec dictum tortor leo, ac pharetra leo fringilla vitae. Cras pellentesque ac arcu sed auctor. Aenean vitae nisl ut diam imperdiet sagittis. Maecenas eget scelerisque orci, vitae maximus ante.";

var mockedDescriptionType4 = "Donec dictum tortor leo, ac pharetra leo fringilla vitae. Cras pellentesque ac arcu sed auctor.";

export class Country {
    constructor(public name: string, public imageSrc: string, public continent: string, public desc: string) { }
}

export class GroupFooter{
    constructor(public description: string) { }   
}

export var mockedDataArray = [
    new Country("Australia", "~/common-screens-category/listview/images/flags/au.png", "Australia", mockedDescription),
    new Country("Belgium", "~/common-screens-category/listview/images/flags/be.png", "Europe", mockedDescriptionType2),
    new Country("Bulgaria", "~/common-screens-category/listview/images/flags/bg.png", "Europe", mockedDescription),
    new Country("Canada", "~/common-screens-category/listview/images/flags/ca.png", "North America", mockedDescriptionType3),
    new Country("Switzerland", "~/common-screens-category/listview/images/flags/ch.png", "Europe", mockedDescriptionType2),
    new Country("China", "~/common-screens-category/listview/images/flags/cn.png", "Asia", mockedDescriptionType4),
    new Country("Czech Republic", "~/common-screens-category/listview/images/flags/cz.png", "Europe", mockedDescription),
    new Country("Germany", "~/common-screens-category/listview/images/flags/de.png", "Europe", mockedDescription),
    new Country("Spain", "~/common-screens-category/listview/images/flags/es.png", "Europe", mockedDescriptionType2),
    new Country("Ethiopia", "~/common-screens-category/listview/images/flags/et.png", "Africa", mockedDescriptionType3),
    new Country("Croatia", "~/common-screens-category/listview/images/flags/hr.png", "Europe", mockedDescription),
    new Country("Hungary", "~/common-screens-category/listview/images/flags/hu.png", "Europe", mockedDescriptionType2),
    new Country("Italy", "~/common-screens-category/listview/images/flags/it.png", "Europe", mockedDescriptionType4),
    new Country("Jamaica", "~/common-screens-category/listview/images/flags/jm.png", "North America", mockedDescription),
    new Country("Romania", "~/common-screens-category/listview/images/flags/ro.png", "Europe", mockedDescriptionType2),
    new Country("Russia", "~/common-screens-category/listview/images/flags/ru.png", "Europe", mockedDescriptionType4),
    new Country("United States", "~/common-screens-category/listview/images/flags/us.png", "North America", mockedDescriptionType3),
]
export var mockedGroupDataArray = [
    new GroupTitle("Asia"),
    new Country("China", "~/common-screens-category/listview/images/flags/cn.png", "Asia", mockedDescriptionType4),

    new GroupTitle("Europe"),
    new Country("Belgium", "~/common-screens-category/listview/images/flags/be.png", "Europe", mockedDescriptionType2),
    new Country("Bulgaria", "~/common-screens-category/listview/images/flags/bg.png", "Europe", mockedDescription),
    new Country("Switzerland", "~/common-screens-category/listview/images/flags/ch.png", "Europe", mockedDescriptionType2),
    new Country("Czech Republic", "~/common-screens-category/listview/images/flags/cz.png", "Europe", mockedDescription),
    new Country("Germany", "~/common-screens-category/listview/images/flags/de.png", "Europe", mockedDescription),
    new Country("Spain", "~/common-screens-category/listview/images/flags/es.png", "Europe", mockedDescriptionType2),
    new Country("Croatia", "~/common-screens-category/listview/images/flags/hr.png", "Europe", mockedDescription),
    new Country("Hungary", "~/common-screens-category/listview/images/flags/hu.png", "Europe", mockedDescriptionType2),
    new Country("Italy", "~/common-screens-category/listview/images/flags/it.png", "Europe", mockedDescriptionType4),
    new Country("Romania", "~/common-screens-category/listview/images/flags/ro.png", "Europe", mockedDescriptionType2),
    new Country("Russia", "~/common-screens-category/listview/images/flags/ru.png", "Europe", mockedDescriptionType4),

    new GroupTitle("North America"),
    new Country("Canada", "~/common-screens-category/listview/images/flags/ca.png", "North America", mockedDescriptionType3),
    new Country("United States", "~/common-screens-category/listview/images/flags/us.png", "North America", mockedDescriptionType3),
    new Country("Jamaica", "~/common-screens-category/listview/images/flags/jm.png", "North America", mockedDescription),

    new GroupFooter("all countries loaded!")
]