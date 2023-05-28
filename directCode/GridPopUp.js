// MainActivity
// package com.example.gridpop;

// import androidx.appcompat.app.AppCompatActivity;

// import android.annotation.SuppressLint;
// import android.app.Dialog;
// import android.os.Bundle;
// import android.view.LayoutInflater;
// import android.view.View;
// import android.view.ViewGroup;
// import android.widget.Button;
// import android.widget.PopupWindow;
// import android.widget.Toast;

// public class MainActivity extends AppCompatActivity {

//     @Override
//     protected void onCreate(Bundle savedInstanceState) {
//         super.onCreate(savedInstanceState);
//         setContentView(R.layout.activity_main);
//     }

//     public void showPopup(View view) {
//         View popupView = LayoutInflater.from(this).inflate(R.layout.popup_layout, null);

//         @SuppressLint({"MissingInflatedId", "LocalSuppress"}) Button buttonClose = popupView.findViewById(R.id.buttonClose);
//         buttonClose.setOnClickListener(new View.OnClickListener() {
//             @Override
//             public void onClick(View v) {
//                 Dialog popupWindow = null;
//                 popupWindow.dismiss();
//             }
//         });

//         PopupWindow popupWindow;
//         popupWindow = new PopupWindow(popupView, ViewGroup.LayoutParams.WRAP_CONTENT, ViewGroup.LayoutParams.WRAP_CONTENT, true);
//         popupWindow.showAsDropDown(view);
//     }
// }

// 0000000000000000000000

// activity_main.xml

// <?xml version="1.0" encoding="utf-8"?>
// <GridLayout xmlns:android="http://schemas.android.com/apk/res/android"
//     android:id="@+id/gridLayout"
//     android:layout_width="match_parent"
//     android:layout_height="match_parent"
//     android:columnCount="2">

//     <Button
//         android:id="@+id/button1"
//         android:layout_width="wrap_content"
//         android:layout_height="wrap_content"
//         android:text="Button 1"
//         android:onClick="showPopup" />

//     <Button
//         android:id="@+id/button2"
//         android:layout_width="wrap_content"
//         android:layout_height="wrap_content"
//         android:text="Button 2"
//         android:onClick="showPopup" />

//     <!-- Add more buttons as needed -->

// </GridLayout>

// popup_layout.xml

// <?xml version="1.0" encoding="utf-8"?>
// <LinearLayout xmlns:android="http://schemas.android.com/apk/res/android"
//     android:layout_width="wrap_content"
//     android:layout_height="wrap_content"
//     android:orientation="vertical"
//     android:padding="16dp">

//     <TextView
//         android:layout_width="wrap_content"
//         android:layout_height="wrap_content"
//         android:text="This is a popup." />

//     <Button
//         android:id="@+id/buttonClose"
//         android:layout_width="wrap_content"
//         android:layout_height="wrap_content"
//         android:text="Close" />

// </LinearLayout>
