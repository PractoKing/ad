// MainActivity;

// package com.example.gatheringevent;

// import android.annotation.SuppressLint;
// import android.os.Bundle;
// import android.view.ContextMenu;
// import android.view.Menu;
// import android.view.MenuItem;
// import android.view.View;
// import android.widget.Button;
// import android.widget.PopupMenu;
// import android.widget.Toast;

// import androidx.appcompat.app.AlertDialog;
// import androidx.appcompat.app.AppCompatActivity;
// public class MainActivity extends AppCompatActivity implements PopupMenu.OnMenuItemClickListener {
//     Button b1, b2;

//     @Override
//     protected void onCreate(Bundle savedInstanceState) {
//         super.onCreate(savedInstanceState);
//         setContentView(R.layout.activity_main);

//         b1 = findViewById(R.id.button);
//         b2 = findViewById(R.id.btnShow);
//         registerForContextMenu(b2);

//         b1.setOnClickListener(view -> {
//             PopupMenu popup = new PopupMenu(MainActivity.this, view);
//             popup.setOnMenuItemClickListener(MainActivity.this);
//             popup.inflate(R.menu.popup_menu);
//             popup.show();
//         });

//     }
//     //
//     @Override
//     public boolean onCreateOptionsMenu(Menu menu) {
//         getMenuInflater().inflate(R.menu.options_menu, menu);
//         return true;
//     }

//     @SuppressLint("NonConstantResourceId")
//     @Override
//     public boolean onOptionsItemSelected(MenuItem item) {
//         Toast.makeText(this, "Selected Item: " +item.getTitle(), Toast.LENGTH_SHORT).show();
//         switch (item.getItemId()) {
//             case R.id.search_item:
//             case R.id.upload_item:
//             case R.id.copy_item:
//             case R.id.print_item:
//             case R.id.share_item:
//             case R.id.bookmark_item:
//                 // do your code
//                 return true;
//             default:
//                 return super.onOptionsItemSelected(item);
//         }
//     }
//     //
//     @Override
//     public void onBackPressed() {

//         AlertDialog.Builder builder = new AlertDialog.Builder(MainActivity.this);

//         builder.setMessage("Do you Enjoy Gathering Event ?");

//         builder.setTitle("Alert !");

//         builder.setCancelable(false);

//         builder.setPositiveButton("Yes", (dialog, which) -> finish());

//         builder.setNegativeButton("No", (dialog, which) -> dialog.cancel());

//         AlertDialog alertDialog = builder.create();
//         alertDialog.show();
//     }
//     //
//     @Override
//     public void onCreateContextMenu(ContextMenu menu, View v, ContextMenu.ContextMenuInfo menuInfo) {
//         super.onCreateContextMenu(menu, v, menuInfo);
//         menu.setHeaderTitle("Context Menu");
//         menu.add(0, v.getId(), 0, "Upload");
//         menu.add(0, v.getId(), 0, "Search");
//         menu.add(0, v.getId(), 0, "Share");
//         menu.add(0, v.getId(), 0, "Bookmark");
//     }
//     @Override
//     public boolean onContextItemSelected(MenuItem item) {
//         Toast.makeText(this, "Selected Item: " +item.getTitle(), Toast.LENGTH_SHORT).show();
//         return true;
//     }
//     //
//     @SuppressLint("NonConstantResourceId")
//     @Override
//     public boolean onMenuItemClick(MenuItem item) {
//         Toast.makeText(this, "Selected Item: " + item.getTitle(), Toast.LENGTH_SHORT).show();
//         switch (item.getItemId()) {
//             case R.id.search_item:
//             case R.id.upload_item:
//             case R.id.copy_item:
//             case R.id.print_item:
//             case R.id.share_item:
//             case R.id.bookmark_item:
//                 // do your code
//                 return true;
//             default:
//                 return false;
//         }
//     }
// }

// activit_main.xml;

// <?xml version="1.0" encoding="utf-8"?>
// <RelativeLayout xmlns:android="http://schemas.android.com/apk/res/android"
//     xmlns:tools="http://schemas.android.com/tools"
//     android:layout_width="match_parent"
//     android:layout_height="match_parent"
//     tools:context=".MainActivity">

//     <TextView
//         android:layout_width="wrap_content"
//         android:layout_height="wrap_content"
//         android:layout_marginTop="180dp"
//         android:gravity="center_horizontal"
//         android:text="Press The Back Button of Your Phone."
//         android:textSize="30dp"
//         android:textStyle="bold" />

//     <Button
//         android:id="@+id/button"
//         android:layout_width="wrap_content"
//         android:layout_height="wrap_content"
//         android:layout_alignParentEnd="true"
//         android:layout_alignParentBottom="true"
//         android:layout_marginEnd="254dp"
//         android:layout_marginBottom="259dp"
//         android:text="PopUp Menu" />

//     <Button
//         android:id="@+id/btnShow"
//         android:layout_width="wrap_content"
//         android:layout_height="wrap_content"
//         android:layout_alignParentStart="true"
//         android:layout_alignParentEnd="true"
//         android:layout_alignParentBottom="true"
//         android:layout_marginStart="209dp"
//         android:layout_marginEnd="27dp"
//         android:layout_marginBottom="261dp"
//         android:text="ContextMenu" />
// </RelativeLayout>
