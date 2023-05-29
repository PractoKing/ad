// MainActivity;
// package com.example.railwayreg;
// import androidx.appcompat.app.AppCompatActivity;

// import android.content.Intent;
// import android.os.Bundle;
// import android.view.View;
// import android.widget.AdapterView;
// import android.widget.ArrayAdapter;
// import android.widget.Button;
// import android.widget.CheckBox;
// import android.widget.EditText;
// import android.widget.RadioButton;
// import android.widget.RadioGroup;
// import android.widget.Spinner;
// import android.widget.Toast;

// public class MainActivity extends AppCompatActivity implements AdapterView.OnItemSelectedListener {

//     EditText e1;
//     Spinner spin;
//     RadioGroup rG;
//     RadioButton rb;
//     CheckBox c1,c2,c3,c4;
//     Button b1;

//     String[] birth_ch = {"1999","2000","2001","2002"};
//     @Override
//     protected void onCreate(Bundle savedInstanceState) {
//         super.onCreate(savedInstanceState);
//         setContentView(R.layout.activity_main);

//         e1 = findViewById(R.id.text);
//         spin = findViewById(R.id.spin);
//         rG = findViewById(R.id.rg);

//         c1 = findViewById(R.id.c1);
//         c2 = findViewById(R.id.c2);
//         c3 = findViewById(R.id.c3);
//         c4 = findViewById(R.id.c4);

//         b1 = findViewById(R.id.button);

//         spin.setOnItemSelectedListener(this);
//         ArrayAdapter<String> aa = new ArrayAdapter<>(this, android.R.layout.simple_spinner_item,birth_ch);
//         aa.setDropDownViewResource(android.R.layout.simple_dropdown_item_1line);
//         spin.setAdapter(aa);

//         b1.setOnClickListener(view -> {

//             rb = findViewById(rG.getCheckedRadioButtonId());

//             String name = e1.getText().toString();
//             String birth = spin.getSelectedItem().toString();
//             String city = rb.getText().toString();
//             String meal = "";

//             if(c1.isChecked())
//             {
//                 meal = meal + c1.getText();
//             }
//             if(c2.isChecked())
//             {
//                 meal = meal +"," + c2.getText();
//             }
//             if(c3.isChecked())
//             {
//                 meal = meal +"," + c3.getText();
//             }
//             if(c4.isChecked())
//             {
//                 meal = meal +"," + c4.getText();
//             }
//             String meal1 = meal;

//             Bundle bundle =  new Bundle();
//             bundle.putString("name",name);
//             bundle.putString("birth",birth);
//             bundle.putString("city",city);
//             bundle.putString("meal",meal1);

//             Intent i = new Intent(MainActivity.this,MainActivity2.class);
//             i.putExtras(bundle);
//             startActivity(i);
//         });
//     }

//     @Override
//     public void onItemSelected(AdapterView<?> adapterView, View view, int i, long l) {
//         Toast.makeText(this, birth_ch[i], Toast.LENGTH_SHORT).show();
//     }

//     @Override
//     public void onNothingSelected(AdapterView<?> adapterView) {

//     }
// }

// MainActivity2;

// package com.example.railwayreg;
// import androidx.appcompat.app.AppCompatActivity;

// import android.annotation.SuppressLint;
// import android.os.Bundle;
// import android.widget.TextView;

// public class MainActivity2 extends AppCompatActivity {

//     TextView t1,t2,t3,t4;
//     @SuppressLint("SetTextI18n")
//     @Override
//     protected void onCreate(Bundle savedInstanceState) {
//         super.onCreate(savedInstanceState);
//         setContentView(R.layout.activity_main2);

//         t1 = findViewById(R.id.txt1);
//         t2 = findViewById(R.id.txt2);
//         t3 = findViewById(R.id.txt3);
//         t4 = findViewById(R.id.txt4);

//         Bundle bundle = getIntent().getExtras();
//         if(bundle!=null)
//         {
//             String name = bundle.getString("name");
//             String birth = bundle.getString("birth");
//             String city = bundle.getString("city");
//             String meal = bundle.getString("meal");

//             t1.setText("Name : " + name);
//             t2.setText("Birth Choice : " + birth);
//             t3.setText("City : " + city);
//             t4.setText("Meal : " + meal);

//         }
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
//         android:id="@+id/text"
//         android:layout_width="325dp"
//         android:layout_height="57dp"
//         android:hint="Enter your name "
//         app:layout_constraintBottom_toBottomOf="parent"
//         app:layout_constraintEnd_toEndOf="parent"
//         app:layout_constraintHorizontal_bias="0.434"
//         app:layout_constraintStart_toStartOf="parent"
//         app:layout_constraintTop_toTopOf="parent"
//         app:layout_constraintVertical_bias="0.157" />

//     <TextView
//         android:layout_width="wrap_content"
//         android:layout_height="wrap_content"
//         android:text="Select Berth Choice"
//         app:layout_constraintBottom_toBottomOf="parent"
//         app:layout_constraintEnd_toEndOf="parent"
//         app:layout_constraintHorizontal_bias="0.186"
//         app:layout_constraintStart_toStartOf="parent"
//         app:layout_constraintTop_toTopOf="parent"
//         app:layout_constraintVertical_bias="0.262" />

//     <Spinner
//         android:id="@+id/spin"
//         android:layout_width="325dp"
//         android:layout_height="57dp"
//         app:layout_constraintBottom_toBottomOf="parent"
//         app:layout_constraintEnd_toEndOf="parent"
//         app:layout_constraintHorizontal_bias="0.434"
//         app:layout_constraintStart_toStartOf="parent"
//         app:layout_constraintTop_toTopOf="parent"
//         app:layout_constraintVertical_bias="0.353" />

//     <TextView
//         android:layout_width="wrap_content"
//         android:layout_height="wrap_content"
//         android:text="Select City "
//         app:layout_constraintBottom_toBottomOf="parent"
//         app:layout_constraintEnd_toEndOf="parent"
//         app:layout_constraintHorizontal_bias="0.171"
//         app:layout_constraintStart_toStartOf="parent"
//         app:layout_constraintTop_toTopOf="parent"
//         app:layout_constraintVertical_bias="0.45" />

//     <RadioGroup
//         android:id="@+id/rg"
//         android:layout_width="325dp"
//         android:layout_height="57dp"
//         android:orientation="horizontal"
//         app:layout_constraintBottom_toBottomOf="parent"
//         app:layout_constraintEnd_toEndOf="parent"
//         app:layout_constraintHorizontal_bias="0.465"
//         app:layout_constraintStart_toStartOf="parent"
//         app:layout_constraintTop_toTopOf="parent"
//         app:layout_constraintVertical_bias="0.54">

//         <RadioButton
//             android:id="@+id/rb"
//             android:layout_width="108dp"
//             android:layout_height="match_parent"
//             android:checked="true"
//             android:text="Pune" />

//         <RadioButton
//             android:layout_width="108dp"
//             android:layout_height="match_parent"
//             android:text="Mumbai" />

//         <RadioButton
//             android:layout_width="108dp"
//             android:layout_height="match_parent"
//             android:text="Delhi" />

//     </RadioGroup>

//     <TextView
//         android:layout_width="wrap_content"
//         android:layout_height="wrap_content"
//         android:text="Select Meal "
//         app:layout_constraintBottom_toBottomOf="parent"
//         app:layout_constraintEnd_toEndOf="parent"
//         app:layout_constraintHorizontal_bias="0.175"
//         app:layout_constraintStart_toStartOf="parent"
//         app:layout_constraintTop_toTopOf="parent"
//         app:layout_constraintVertical_bias="0.635" />

//     <CheckBox
//         android:id="@+id/c1"
//         android:layout_width="100dp"
//         android:layout_height="wrap_content"
//         android:text="Misal"
//         app:layout_constraintBottom_toBottomOf="parent"
//         app:layout_constraintEnd_toEndOf="parent"
//         app:layout_constraintHorizontal_bias="0.194"
//         app:layout_constraintStart_toStartOf="parent"
//         app:layout_constraintTop_toTopOf="parent"
//         app:layout_constraintVertical_bias="0.723" />

//     <CheckBox
//         android:id="@+id/c2"
//         android:layout_width="100dp"
//         android:layout_height="wrap_content"
//         android:text="PavBhaji"
//         app:layout_constraintBottom_toBottomOf="parent"
//         app:layout_constraintEnd_toEndOf="parent"
//         app:layout_constraintHorizontal_bias="0.717"
//         app:layout_constraintStart_toStartOf="@+id/c1"
//         app:layout_constraintTop_toTopOf="parent"
//         app:layout_constraintVertical_bias="0.723" />

//     <CheckBox
//         android:id="@+id/c3"
//         android:layout_width="100dp"
//         android:layout_height="wrap_content"
//         android:text="Idli-Dosa"
//         app:layout_constraintBottom_toBottomOf="parent"
//         app:layout_constraintEnd_toEndOf="parent"
//         app:layout_constraintHorizontal_bias="0.193"
//         app:layout_constraintStart_toStartOf="parent"
//         app:layout_constraintTop_toTopOf="parent"
//         app:layout_constraintVertical_bias="0.842" />

//     <CheckBox
//         android:id="@+id/c4"
//         android:layout_width="100dp"
//         android:layout_height="wrap_content"
//         android:text="Poli Bhaji"
//         app:layout_constraintBottom_toBottomOf="parent"
//         app:layout_constraintEnd_toEndOf="parent"
//         app:layout_constraintHorizontal_bias="0.771"
//         app:layout_constraintStart_toStartOf="parent"
//         app:layout_constraintTop_toTopOf="parent"
//         app:layout_constraintVertical_bias="0.842" />

//     <Button
//         android:id="@+id/button"
//         android:layout_width="wrap_content"
//         android:layout_height="wrap_content"
//         android:text="Submit"
//         app:layout_constraintBottom_toBottomOf="parent"
//         app:layout_constraintEnd_toEndOf="parent"
//         app:layout_constraintHorizontal_bias="0.489"
//         app:layout_constraintStart_toStartOf="parent"
//         app:layout_constraintTop_toTopOf="parent"
//         app:layout_constraintVertical_bias="0.952" />

// </androidx.constraintlayout.widget.ConstraintLayout>

// activity_main2.xml;

// <?xml version="1.0" encoding="utf-8"?>
// <androidx.constraintlayout.widget.ConstraintLayout xmlns:android="http://schemas.android.com/apk/res/android"
//     xmlns:app="http://schemas.android.com/apk/res-auto"
//     xmlns:tools="http://schemas.android.com/tools"
//     android:layout_width="match_parent"
//     android:layout_height="match_parent"
//     tools:context=".MainActivity2">

//     <TextView
//         android:id="@+id/txt1"
//         android:layout_width="353dp"
//         android:layout_height="68dp"
//         android:textSize="20sp"
//         app:layout_constraintBottom_toBottomOf="parent"
//         app:layout_constraintEnd_toEndOf="parent"
//         app:layout_constraintStart_toStartOf="parent"
//         app:layout_constraintTop_toTopOf="parent"
//         app:layout_constraintVertical_bias="0.191" />

//     <TextView
//         android:id="@+id/txt2"
//         android:layout_width="353dp"
//         android:layout_height="68dp"
//         android:textSize="20sp"
//         app:layout_constraintBottom_toBottomOf="parent"
//         app:layout_constraintEnd_toEndOf="parent"
//         app:layout_constraintStart_toStartOf="parent"
//         app:layout_constraintTop_toTopOf="parent"
//         app:layout_constraintVertical_bias="0.366" />

//     <TextView
//         android:id="@+id/txt3"
//         android:layout_width="353dp"
//         android:layout_height="68dp"
//         android:textSize="20sp"
//         app:layout_constraintBottom_toBottomOf="parent"
//         app:layout_constraintEnd_toEndOf="parent"
//         app:layout_constraintStart_toStartOf="parent"
//         app:layout_constraintTop_toTopOf="parent"
//         app:layout_constraintVertical_bias="0.55" />

//     <TextView
//         android:id="@+id/txt4"
//         android:layout_width="353dp"
//         android:layout_height="107dp"
//         android:textSize="20sp"
//         app:layout_constraintBottom_toBottomOf="parent"
//         app:layout_constraintEnd_toEndOf="parent"
//         app:layout_constraintHorizontal_bias="0.462"
//         app:layout_constraintStart_toStartOf="parent"
//         app:layout_constraintTop_toTopOf="parent"
//         app:layout_constraintVertical_bias="0.766" />

// </androidx.constraintlayout.widget.ConstraintLayout>
