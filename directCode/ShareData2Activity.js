// MainActivity;
// package com.example.sharedataapp;

// import android.content.Intent;
// import android.os.Bundle;

// import android.widget.Button;
// import android.widget.EditText;

// import androidx.appcompat.app.AppCompatActivity;

// public class MainActivity extends AppCompatActivity {
//     private EditText editName, editMobile, editStarter, editMainCourse, editDessert, editDrink;
//     @Override
//     protected void onCreate(Bundle savedInstanceState) {
//         super.onCreate(savedInstanceState);
//         setContentView(R.layout.activity_main);
//         editName = findViewById(R.id.editName);
//         editMobile = findViewById(R.id.editMobile);
//         editStarter = findViewById(R.id.editStarter);
//         editMainCourse = findViewById(R.id.editMainCourse);
//         editDessert = findViewById(R.id.editDessert);
//         editDrink = findViewById(R.id.editDrink);
//         Button btnSubmit = findViewById(R.id.btnSubmit);
//         btnSubmit.setOnClickListener(v -> {
//             String name = editName.getText().toString();
//             String mobile = editMobile.getText().toString();
//             String starter = editStarter.getText().toString();
//             String mainCourse = editMainCourse.getText().toString();
//             String dessert = editDessert.getText().toString();
//             String drink = editDrink.getText().toString();
//             Intent intent = new Intent(MainActivity.this, ShowActivity.class);
//             intent.putExtra("name", name);
//             intent.putExtra("mobile", mobile);
//             intent.putExtra("starter", starter);
//             intent.putExtra("mainCourse", mainCourse);
//             intent.putExtra("dessert", dessert);
//             intent.putExtra("drink", drink);
//             startActivity(intent);
//         });
//     }
// }

// ShowActivity;

// package com.example.sharedataapp;

// import android.content.Intent;
// import android.os.Bundle;
// import android.view.View;
// import android.widget.Button;
// import android.widget.TextView;
// import androidx.appcompat.app.AppCompatActivity;
// public class ShowActivity extends AppCompatActivity {
//     private TextView tvName, tvMobile, tvStarter, tvMainCourse, tvDessert, tvDrink;
//     @Override
//     protected void onCreate(Bundle savedInstanceState) {
//         super.onCreate(savedInstanceState);
//         setContentView(R.layout.activity_show);
//         tvName = findViewById(R.id.tvName);
//         tvMobile = findViewById(R.id.tvMobile);
//         tvStarter = findViewById(R.id.tvStarter);
//         tvMainCourse = findViewById(R.id.tvMainCourse);
//         tvDessert = findViewById(R.id.tvDessert);
//         tvDrink = findViewById(R.id.tvDrink);
//         Intent intent = getIntent();
//         if (intent != null) {
//             String name = intent.getStringExtra("name");
//             String mobile = intent.getStringExtra("mobile");
//             String starter = intent.getStringExtra("starter");
//             String mainCourse = intent.getStringExtra("mainCourse");
//             String dessert = intent.getStringExtra("dessert");
//             String drink = intent.getStringExtra("drink");
//             tvName.setText("Name: " + name);
//             tvMobile.setText("Mobile: " + mobile);
//             tvStarter.setText("Starter: " + starter);
//             tvMainCourse.setText("Main Course: " + mainCourse);
//             tvDessert.setText("Dessert: " + dessert);
//             tvDrink.setText("Drink: " + drink);
//         }
//         Button btnBack = findViewById(R.id.btnBack);
//         btnBack.setOnClickListener(new View.OnClickListener() {
//             @Override
//             public void onClick(View v) {
//                 finish();
//             }
//         });
//     }
// }

// activity_main.xml;

// <LinearLayout xmlns:android="http://schemas.android.com/apk/res/android"
//     xmlns:tools="http://schemas.android.com/tools"
//     android:layout_width="match_parent"
//     android:layout_height="match_parent"
//     android:orientation="vertical"
//     android:padding="16dp"
//     tools:context=".MainActivity">

//     <EditText
//         android:id="@+id/editName"
//         android:layout_width="match_parent"
//         android:layout_height="wrap_content"
//         android:hint="@string/name2"
//         android:layout_marginTop="40dp"
//         android:minHeight="48dp"
//         android:autofillHints="text"
//         android:inputType="textPersonName" />
//     <EditText
//         android:id="@+id/editMobile"
//         android:layout_width="match_parent"
//         android:layout_height="wrap_content"
//         android:hint="@string/mobile_number"
//         android:inputType="phone"
//         android:minHeight="48dp"
//         android:layout_marginTop="20dp"/>
//     <EditText
//         android:id="@+id/editStarter"
//         android:layout_width="match_parent"
//         android:layout_height="wrap_content"
//         android:hint="@string/starter"
//         android:layout_marginTop="20dp"
//         android:minHeight="48dp" />
//     <EditText
//         android:id="@+id/editMainCourse"
//         android:layout_width="match_parent"
//         android:layout_height="wrap_content"
//         android:layout_marginTop="20dp"
//         android:hint="@string/main_course"
//         android:minHeight="48dp" />
//     <EditText
//         android:id="@+id/editDessert"
//         android:layout_width="match_parent"
//         android:layout_height="wrap_content"
//         android:hint="@string/dessert"
//         android:layout_marginTop="20dp"
//         android:minHeight="48dp" />
//     <EditText
//         android:id="@+id/editDrink"
//         android:layout_width="match_parent"
//         android:layout_height="wrap_content"
//         android:hint="@string/drink"
//         android:minHeight="48dp"
//         android:layout_marginTop="20dp"/>
//     <Button
//         android:id="@+id/btnSubmit"
//         android:layout_width="match_parent"
//         android:layout_height="wrap_content"
//         android:text="@string/order"
//         android:layout_marginTop="20dp"/>
// </LinearLayout>

// activity_show.xml;

// <LinearLayout xmlns:android="http://schemas.android.com/apk/res/android"
//     xmlns:tools="http://schemas.android.com/tools"
//     android:layout_width="match_parent"
//     android:layout_height="match_parent"
//     android:orientation="vertical"
//     android:padding="16dp"
//     tools:context=".ShowActivity">
//     <Button
//         android:id="@+id/button"
//         android:layout_width="match_parent"
//         android:layout_height="wrap_content"
//         android:text="Order Details" />
//     <TextView
//         android:id="@+id/tvName"
//         android:layout_width="match_parent"
//         android:layout_height="wrap_content"
//         android:text="Name:"
//         android:layout_marginTop="80dp"/>
//     <TextView
//         android:id="@+id/tvMobile"
//         android:layout_width="match_parent"
//         android:layout_height="wrap_content"
//         android:layout_marginTop="20dp"
//         android:text="Mobile:" />
//     <TextView
//         android:id="@+id/tvStarter"
//         android:layout_width="match_parent"
//         android:layout_height="wrap_content"
//         android:layout_marginTop="20dp"
//         android:text="Starter:" />
//     <TextView
//         android:id="@+id/tvMainCourse"
//         android:layout_width="match_parent"
//         android:layout_height="wrap_content"
//         android:layout_marginTop="20dp"
//         android:text="Main Course:" />
//     <TextView
//         android:id="@+id/tvDessert"
//         android:layout_width="match_parent"
//         android:layout_height="wrap_content"
//         android:layout_marginTop="20dp"
//         android:text="Dessert:" />
//     <TextView
//         android:id="@+id/tvDrink"
//         android:layout_width="match_parent"
//         android:layout_height="wrap_content"
//         android:layout_marginTop="20dp"
//         android:text="Drink:" />
//     <Button
//         android:id="@+id/btnBack"
//         android:layout_width="match_parent"
//         android:layout_height="wrap_content"
//         android:layout_marginTop="20dp"
//         android:text="Back To Order" />
// </LinearLayout>
