// MainActivity
// package com.example.myapplication;

// import androidx.appcompat.app.AppCompatActivity;

// import android.content.Intent;
// import android.os.Bundle;
// import android.view.View;

// public class MainActivity extends AppCompatActivity {

//     @Override
//     protected void onCreate(Bundle savedInstanceState) {
//         super.onCreate(savedInstanceState);
//         setContentView(R.layout.activity_main);
//         View btnGoToSecondActivity = findViewById(R.id.btnGoToSecondActivity);

//         btnGoToSecondActivity.setOnClickListener(new View.OnClickListener() {
//             @Override
//             public void onClick(View v) {
//                 Intent intent = new Intent(MainActivity.this, MainActivity2.class);
//                 startActivity(intent);
//             }
//         });
//     }
// }

// MainActivity2
// package com.example.myapplication;

// import androidx.appcompat.app.AppCompatActivity;

// import android.content.Intent;
// import android.os.Bundle;
// import android.view.View;

// public class MainActivity2<SecondActivity> extends AppCompatActivity {

//     @Override
//     protected void onCreate(Bundle savedInstanceState) {
//         super.onCreate(savedInstanceState);
//         setContentView(R.layout.activity_main2);
//         View btnGoToThirdActivity;
//         btnGoToThirdActivity = findViewById(R.id.btnGoToThirdActivity);

//         btnGoToThirdActivity.setOnClickListener(new View.OnClickListener() {
//             @Override
//             public void onClick(View v) {
//                 Intent intent = new Intent(MainActivity2.this, MainActivity3.class);
//                 startActivity(intent);
//             }
//         });
//     }
// }

// MainActivity3
// package com.example.myapplication;

// import androidx.appcompat.app.AppCompatActivity;

// import android.annotation.SuppressLint;
// import android.os.Bundle;
// import android.view.View;

// public class MainActivity3 extends AppCompatActivity {

//     @SuppressLint("MissingInflatedId")
//     @Override
//     protected void onCreate(Bundle savedInstanceState) {
//         super.onCreate(savedInstanceState);
//         setContentView(R.layout.activity_main3);

//         View btnGoToMainActivity;
//         btnGoToMainActivity = findViewById(R.id.btnGoToMainActivity);

//         btnGoToMainActivity.setOnClickListener(new View.OnClickListener() {
//             @Override
//             public void onClick(View v) {
//                 finish();
//             }
//         });
//     }
// }

// activity_main.xml
// <?xml version="1.0" encoding="utf-8"?>
// <LinearLayout  xmlns:android="http://schemas.android.com/apk/res/android"
//     xmlns:app="http://schemas.android.com/apk/res-auto"
//     xmlns:tools="http://schemas.android.com/tools"
//     android:layout_width="match_parent"
//     android:layout_height="match_parent"
//     tools:context=".MainActivity">

//     <Button
//         android:id="@+id/btnGoToSecondActivity"
//         android:layout_width="wrap_content"
//         android:layout_height="wrap_content"
//         android:text="Go to Second Activity"
//         tools:ignore="MissingConstraints" />

//     <TextView
//         android:id="@+id/textView"
//         android:layout_width="372dp"
//         android:layout_height="135dp"
//         android:text="First Activity"
//         tools:layout_editor_absoluteX="22dp"
//         tools:layout_editor_absoluteY="109dp"
//         tools:ignore="MissingConstraints" />

// </LinearLayout >
// activity_main2.xml
// <?xml version="1.0" encoding="utf-8"?>
// <LinearLayout  xmlns:android="http://schemas.android.com/apk/res/android"
//     xmlns:app="http://schemas.android.com/apk/res-auto"
//     xmlns:tools="http://schemas.android.com/tools"
//     android:layout_width="match_parent"
//     android:layout_height="match_parent"
//     tools:context=".MainActivity2">

//     <Button
//         android:id="@+id/btnGoToThirdActivity"
//         android:layout_width="wrap_content"
//         android:layout_height="wrap_content"
//         android:text="Go to Third Activity"
//         tools:ignore="MissingConstraints" />

//     <TextView
//         android:id="@+id/textView2"
//         android:layout_width="403dp"
//         android:layout_height="99dp"
//         android:text="Second Activity"
//         tools:layout_editor_absoluteX="2dp"
//         tools:layout_editor_absoluteY="89dp"
//         tools:ignore="MissingConstraints" />

// </LinearLayout >
// activity_main3.xml
// <?xml version="1.0" encoding="utf-8"?>
// <LinearLayout  xmlns:android="http://schemas.android.com/apk/res/android"
//     xmlns:app="http://schemas.android.com/apk/res-auto"
//     xmlns:tools="http://schemas.android.com/tools"
//     android:layout_width="match_parent"
//     android:layout_height="match_parent"
//     tools:context=".MainActivity3">

//     <Button
//         android:id="@+id/btnGoToMainActivity"
//         android:layout_width="wrap_content"
//         android:layout_height="wrap_content"
//         android:text="Go to Main Activity"
//         tools:ignore="MissingConstraints" />

//     <TextView
//         android:id="@+id/textView3"
//         android:layout_width="406dp"
//         android:layout_height="91dp"
//         android:text="Third Activity"
//         tools:layout_editor_absoluteX="3dp"
//         tools:layout_editor_absoluteY="99dp"
//         tools:ignore="MissingConstraints" />

// </LinearLayout >
