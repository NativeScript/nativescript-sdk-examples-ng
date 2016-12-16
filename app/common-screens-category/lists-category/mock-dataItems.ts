/* tslint:disable:max-line-length */
export class Header {
    constructor(public name: string, public type: string, public imageSrc?: string, public desc?: string) { }
}

export class Footer {
    constructor(public name: string, public type: string, public imageSrc?: string, public desc?: string) { }
}

export class Country {
    constructor(public name: string, public imageSrc: string, public continent: string, public desc: string) { }
}

let mockedDescription = "Cras ut turpis mollis, vestibulum leo a, eleifend enim. Nam rutrum justo vestibulum dignissim tempor. Cras ac consequat ante. Nullam malesuada vulputate leo fringilla consectetur. In ligula felis, pharetra nec lacus ornare, laoreet pellentesque odio.";
let mockedDescriptionType2 = "Nunc vel augue quam. Phasellus pharetra lobortis nulla, at tincidunt augue consectetur sit amet. Praesent eget tellus diam. Suspendisse potenti. Praesent commodo lacinia consectetur. Pellentesque lacinia accumsan semper.";
let mockedDescriptionType3 = "Nulla convallis urna eu est tristique, in ullamcorper sapien rutrum. Donec dictum tortor leo, ac pharetra leo fringilla vitae. Cras pellentesque ac arcu sed auctor. Aenean vitae nisl ut diam imperdiet sagittis. Maecenas eget scelerisque orci, vitae maximus ante.";
let mockedDescriptionType4 = "Donec dictum tortor leo, ac pharetra leo fringilla vitae. Cras pellentesque ac arcu sed auctor.";

export let mockedDataArray = [
    new Country("Australia", "~/common-screens-category/lists-category/images/flags/au.png", "Australia", mockedDescription),
    new Country("Belgium", "~/common-screens-category/lists-category/images/flags/be.png", "Europe", mockedDescriptionType2),
    new Country("Bulgaria", "~/common-screens-category/lists-category/images/flags/bg.png", "Europe", mockedDescription),
    new Country("Canada", "~/common-screens-category/lists-category/images/flags/ca.png", "North America", mockedDescriptionType3),
    new Country("Switzerland", "~/common-screens-category/lists-category/images/flags/ch.png", "Europe", mockedDescriptionType2),
    new Country("China", "~/common-screens-category/lists-category/images/flags/cn.png", "Asia", mockedDescriptionType4),
    new Country("Czech Republic", "~/common-screens-category/lists-category/images/flags/cz.png", "Europe", mockedDescription),
    new Country("Germany", "~/common-screens-category/lists-category/images/flags/de.png", "Europe", mockedDescription),
    new Country("Spain", "~/common-screens-category/lists-category/images/flags/es.png", "Europe", mockedDescriptionType2),
    new Country("Ethiopia", "~/common-screens-category/lists-category/images/flags/et.png", "Africa", mockedDescriptionType3),
    new Country("Croatia", "~/common-screens-category/lists-category/images/flags/hr.png", "Europe", mockedDescription),
    new Country("Hungary", "~/common-screens-category/lists-category/images/flags/hu.png", "Europe", mockedDescriptionType2),
    new Country("Italy", "~/common-screens-category/lists-category/images/flags/it.png", "Europe", mockedDescriptionType4),
    new Country("Jamaica", "~/common-screens-category/lists-category/images/flags/jm.png", "North America", mockedDescription),
    new Country("Romania", "~/common-screens-category/lists-category/images/flags/ro.png", "Europe", mockedDescriptionType2),
    new Country("Russia", "~/common-screens-category/lists-category/images/flags/ru.png", "Europe", mockedDescriptionType4),
    new Country("United States", "~/common-screens-category/lists-category/images/flags/us.png", "North America", mockedDescriptionType3),
];

export let mockedCounties = [
    new Header("Asia", "header"),
    new Country("China", "~/common-screens-category/lists-category/images/flags/cn.png", "Asia", mockedDescriptionType4),
    new Header("Europe", "header"),
    new Country("Belgium", "~/common-screens-category/lists-category/images/flags/be.png", "Europe", mockedDescriptionType2),
    new Country("Bulgaria", "~/common-screens-category/lists-category/images/flags/bg.png", "Europe", mockedDescription),
    new Country("Switzerland", "~/common-screens-category/lists-category/images/flags/ch.png", "Europe", mockedDescriptionType2),
    new Country("Czech Republic", "~/common-screens-category/lists-category/images/flags/cz.png", "Europe", mockedDescription),
    new Country("Germany", "~/common-screens-category/lists-category/images/flags/de.png", "Europe", mockedDescription),
    new Country("Spain", "~/common-screens-category/lists-category/images/flags/es.png", "Europe", mockedDescriptionType2),
    new Country("Croatia", "~/common-screens-category/lists-category/images/flags/hr.png", "Europe", mockedDescription),
    new Country("Hungary", "~/common-screens-category/lists-category/images/flags/hu.png", "Europe", mockedDescriptionType2),
    new Country("Italy", "~/common-screens-category/lists-category/images/flags/it.png", "Europe", mockedDescriptionType4),
    new Country("Romania", "~/common-screens-category/lists-category/images/flags/ro.png", "Europe", mockedDescriptionType2),
    new Country("Russia", "~/common-screens-category/lists-category/images/flags/ru.png", "Europe", mockedDescriptionType4),
    new Header("North America", "header"),
    new Country("Canada", "~/common-screens-category/lists-category/images/flags/ca.png", "North America", mockedDescriptionType3),
    new Country("United States", "~/common-screens-category/lists-category/images/flags/us.png", "North America", mockedDescriptionType3),
    new Country("Jamaica", "~/common-screens-category/lists-category/images/flags/jm.png", "North America", mockedDescription),
    new Footer("all countries loaded!", "footer")
];


