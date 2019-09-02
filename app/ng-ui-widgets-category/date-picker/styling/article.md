<snippet id='styling-datepicker-css'/>
<snippet id='styling-datepicker-html'/>

> **Note:** On Android the native widgets [android.widget.DatePicker](http://developer.android.com/reference/android/widget/DatePicker.html) is not allowing runtime changes to the `color` property. So if you want to have a different color for your day/month/year properties, you need to change it via the Android resources by providing custom `styles.xml` (in `values-v21`) where the style for `android:textColorPrimary` can be overwritten.