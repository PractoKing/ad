// MainActivity.java;
// package com.example.webviewsameactivity;

// import android.os.Bundle;
// import android.webkit.WebSettings;
// import android.webkit.WebView;
// import android.webkit.WebViewClient;
// import android.widget.Button;
// import android.widget.EditText;

// import androidx.appcompat.app.AppCompatActivity;

// public class MainActivity extends AppCompatActivity {
//     EditText txt;
//     Button b1;
//     WebView web;
//     @Override
//     protected void onCreate(Bundle savedInstanceState) {
//         super.onCreate(savedInstanceState);
//         setContentView(R.layout.activity_main);

//         txt = findViewById(R.id.txt1);
//         b1= findViewById(R.id.button);
//         web = findViewById(R.id.web);

//         b1.setOnClickListener(view -> {
//             String str = txt.getText().toString();
//             web.setWebViewClient(new WebViewClient());
//             web.loadUrl(str);
//             WebSettings webSettings = web.getSettings();
//             webSettings.setJavaScriptEnabled(true);
//         });
//     }
// }

// activity_main.xml;
// <?xml version="1.0" encoding="utf-8"?>
// <androidx.constraintlayout.widget.ConstraintLayout xmlns:android="http://schemas.android.com/apk/res/android"
//     xmlns:app="http://schemas.android.com/apk/res-auto"
//     xmlns:tools="http://schemas.android.com/tools"
//     android:layout_width="match_parent"
//     android:layout_height="match_parent"
//     tools:context=".MainActivity">

//     <EditText
//         android:id="@+id/txt1"
//         android:layout_width="316dp"
//         android:layout_height="56dp"
//         android:hint=" enter any url"
//         app:layout_constraintBottom_toBottomOf="parent"
//         app:layout_constraintEnd_toEndOf="parent"
//         app:layout_constraintHorizontal_bias="0.494"
//         app:layout_constraintStart_toStartOf="parent"
//         app:layout_constraintTop_toTopOf="parent"
//         app:layout_constraintVertical_bias="0.068" />

//     <Button
//         android:id="@+id/button"
//         android:layout_width="wrap_content"
//         android:layout_height="wrap_content"
//         android:text="Submit"
//         app:layout_constraintBottom_toBottomOf="parent"
//         app:layout_constraintEnd_toEndOf="parent"
//         app:layout_constraintStart_toStartOf="parent"
//         app:layout_constraintTop_toTopOf="parent"
//         app:layout_constraintVertical_bias="0.188" />

//     <WebView
//         android:id="@+id/web"
//         android:layout_width="338dp"
//         android:layout_height="514dp"
//         app:layout_constraintBottom_toBottomOf="parent"
//         app:layout_constraintEnd_toEndOf="parent"
//         app:layout_constraintHorizontal_bias="0.493"
//         app:layout_constraintStart_toStartOf="parent"
//         app:layout_constraintTop_toTopOf="parent"
//         app:layout_constraintVertical_bias="0.936" />

// </androidx.constraintlayout.widget.ConstraintLayout>
