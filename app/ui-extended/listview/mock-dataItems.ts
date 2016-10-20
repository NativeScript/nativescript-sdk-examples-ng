export class GroupTitle {
    constructor(public title: string) { }
}

var mockedDescription = "Cras ut turpis mollis, vestibulum leo a, eleifend enim. Nam rutrum justo vestibulum dignissim tempor. Cras ac consequat ante. Nullam malesuada vulputate leo fringilla consectetur. In ligula felis, pharetra nec lacus ornare, laoreet pellentesque odio. Curabitur eget laoreet lectus. Ut et auctor mauris, quis facilisis tortor. Phasellus congue bibendum lacus, nec cursus est. Aliquam sed fermentum augue.";

var mockedDescriptionType2 = "Nunc vel augue quam. Phasellus pharetra lobortis nulla, at tincidunt augue consectetur sit amet. Praesent eget tellus diam. Suspendisse potenti. Praesent commodo lacinia consectetur. Pellentesque lacinia accumsan semper. Aliquam erat volutpat. Vestibulum vulputate semper consectetur. Nunc eu nibh id orci luctus euismod. Praesent ultrices diam ipsum, sed sagittis purus vestibulum id.";

var mockedDescriptionType3 = "Nulla convallis urna eu est tristique, in ullamcorper sapien rutrum. Donec dictum tortor leo, ac pharetra leo fringilla vitae. Cras pellentesque ac arcu sed auctor. Aenean vitae nisl ut diam imperdiet sagittis. Maecenas eget scelerisque orci, vitae maximus ante. Nunc id diam at nulla iaculis varius in et mauris. Sed fermentum dignissim erat suscipit cursus.";

var mockedDescriptionType4 = "Donec dictum tortor leo, ac pharetra leo fringilla vitae. Cras pellentesque ac arcu sed auctor.";

export class Country {
    constructor(public name: string, public imageSrc: string, public continent: string, public desc: string) { }
}

export class GroupFooter{
    constructor(public description: string) { }   
}

export var mockedDataArray = [
    new Country("Australia", "~/ui-extended/listview/images/flags/au.png", "Australia", mockedDescription),
    new Country("Belgium", "~/ui-extended/listview/images/flags/be.png", "Europe", mockedDescriptionType2),
    new Country("Bulgaria", "~/ui-extended/listview/images/flags/bg.png", "Europe", mockedDescription),
    new Country("Canada", "~/ui-extended/listview/images/flags/ca.png", "North America", mockedDescriptionType3),
    new Country("Switzerland", "~/ui-extended/listview/images/flags/ch.png", "Europe", mockedDescriptionType2),
    new Country("China", "~/ui-extended/listview/images/flags/cn.png", "Asia", mockedDescriptionType4),
    new Country("Czech Republic", "~/ui-extended/listview/images/flags/cz.png", "Europe", mockedDescription),
    new Country("Germany", "~/ui-extended/listview/images/flags/de.png", "Europe", mockedDescription),
    new Country("Spain", "~/ui-extended/listview/images/flags/es.png", "Europe", mockedDescriptionType2),
    new Country("Ethiopia", "~/ui-extended/listview/images/flags/et.png", "Africa", mockedDescriptionType3),
    new Country("Croatia", "~/ui-extended/listview/images/flags/hr.png", "Europe", mockedDescription),
    new Country("Hungary", "~/ui-extended/listview/images/flags/hu.png", "Europe", mockedDescriptionType2),
    new Country("Italy", "~/ui-extended/listview/images/flags/it.png", "Europe", mockedDescriptionType4),
    new Country("Jamaica", "~/ui-extended/listview/images/flags/jm.png", "North America", mockedDescription),
    new Country("Japan", "~/ui-extended/listview/images/flags/jp.png", "Asia", mockedDescription),
    new Country("Romania", "~/ui-extended/listview/images/flags/ro.png", "Europe", mockedDescriptionType2),
    new Country("Russia", "~/ui-extended/listview/images/flags/ru.png", "Europe", mockedDescriptionType4),
    new Country("United States", "~/ui-extended/listview/images/flags/us.png", "North America", mockedDescriptionType3),
]
export var mockedGroupDataArray = [
    new GroupTitle("Asia"),
    new Country("Japan", "~/ui-extended/listview/single-line/images/flags/jp.png", "Asia", mockedDescription),
    new Country("China", "~/ui-extended/listview/single-line/images/flags/cn.png", "Asia", mockedDescriptionType4),

    new GroupTitle("Europe"),
    new Country("Belgium", "~/ui-extended/listview/single-line/images/flags/be.png", "Europe", mockedDescriptionType2),
    new Country("Bulgaria", "~/ui-extended/listview/single-line/images/flags/bg.png", "Europe", mockedDescription),
    new Country("Switzerland", "~/ui-extended/listview/single-line/images/flags/ch.png", "Europe", mockedDescriptionType2),
    new Country("Czech Republic", "~/ui-extended/listview/single-line/images/flags/cz.png", "Europe", mockedDescription),
    new Country("Germany", "~/ui-extended/listview/single-line/images/flags/de.png", "Europe", mockedDescription),
    new Country("Spain", "~/ui-extended/listview/single-line/images/flags/es.png", "Europe", mockedDescriptionType2),
    new Country("Croatia", "~/ui-extended/listview/single-line/images/flags/hr.png", "Europe", mockedDescription),
    new Country("Hungary", "~/ui-extended/listview/single-line/images/flags/hu.png", "Europe", mockedDescriptionType2),
    new Country("Italy", "~/ui-extended/listview/single-line/images/flags/it.png", "Europe", mockedDescriptionType4),
    new Country("Romania", "~/ui-extended/listview/single-line/images/flags/ro.png", "Europe", mockedDescriptionType2),
    new Country("Russia", "~/ui-extended/listview/single-line/images/flags/ru.png", "Europe", mockedDescriptionType4),

    new GroupTitle("North America"),
    new Country("Canada", "~/ui-extended/listview/single-line/images/flags/ca.png", "North America", mockedDescriptionType3),
    new Country("United States", "~/ui-extended/listview/single-line/images/flags/us.png", "North America", mockedDescriptionType3),
    new Country("Jamaica", "~/ui-extended/listview/single-line/images/flags/jm.png", "North America", mockedDescription),

    new GroupFooter("all countries loaded!")
]