// MainActivity;

// package com.example.registrationform;

// import android.annotation.SuppressLint;
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

// import androidx.appcompat.app.AppCompatActivity;

// public class MainActivity extends AppCompatActivity implements AdapterView.OnItemSelectedListener {

//     EditText name;
//     CheckBox bt1,bt2,bt3,bt4;
//     RadioGroup rg;
//     RadioButton rb;
//     Button submit;
//     String[] bankNames={"FOC","AD","DM","IAE","DBM"};

//     @SuppressLint({"MissingInflatedId", "WrongViewCast"})
//     @Override
//     protected void onCreate(Bundle savedInstanceState) {
//         super.onCreate(savedInstanceState);
//         setContentView(R.layout.activity_main);
//         name = findViewById(R.id.editTextTextPersonName);
//         bt1= findViewById(R.id.checkBox);
//         bt2= findViewById(R.id.checkBox2);
//         bt3= findViewById(R.id.checkBox3);
//         bt4= findViewById(R.id.checkBox4);
//         submit = findViewById(R.id.button);
//         Spinner spin = findViewById(R.id.spinner3);
//         rg =  findViewById(R.id.radioGroup);
//         //rb = findViewById(R.id.radioButton);

//         spin.setOnItemSelectedListener(this);

//         ArrayAdapter<String> aa = new ArrayAdapter<>(this,android.R.layout.simple_spinner_item,bankNames);
//         aa.setDropDownViewResource(android.R.layout.simple_spinner_dropdown_item);
//         spin.setAdapter(aa);

//         submit.setOnClickListener(view -> {

//             rb = (RadioButton)findViewById(rg.getCheckedRadioButtonId());
//             String na = name.getText().toString().trim();
//             String sub = spin.getSelectedItem().toString().trim();
//             String gn = rb.getText().toString();
//             String qu = "";

//             if (bt1.isChecked()){
//                 qu = qu + " " + bt1.getText();
//             }
//             if (bt2.isChecked()){
//                 qu = qu + "," +  bt2.getText();
//             }
//             if (bt3.isChecked()){
//                 qu = qu + "," +  bt3.getText();
//             }
//             if (bt4.isChecked()){
//                 qu = qu + "," +  bt4.getText();
//             }
//             String q2 = qu;
//             Bundle bundle = new Bundle();
//             bundle.putString("name", na);
//             bundle.putString("sub", sub);
//             bundle.putString("male", gn);
//             bundle.putString("SSC,HSC,BE/BTech,PG", q2);

//             Intent i1 = new Intent(MainActivity.this, SecondActivity.class);
//             i1.putExtras(bundle);
//             startActivity(i1);
//         });
//     }

//     @Override
//     public void onItemSelected(AdapterView<?> arg0, View arg1, int position, long id) {
//         Toast.makeText(getApplicationContext(), bankNames[position], Toast.LENGTH_LONG).show();
//     }

//     @Override
//     public void onNothingSelected(AdapterView<?> arg0) {

//     }
// }

// SecondActivity;

// package com.example.registrationform;

// import android.os.Bundle;
// import android.widget.TextView;

// import androidx.appcompat.app.AppCompatActivity;

// public class SecondActivity extends AppCompatActivity {

//     @Override
//     protected void onCreate(Bundle savedInstanceState) {
//         super.onCreate(savedInstanceState);
//         setContentView(R.layout.activity_second);
//         Bundle bundle = getIntent().getExtras();
//         if (bundle != null) {
//             String name = bundle.getString("name");
//             String sub = bundle.getString("sub");
//             String gen = bundle.getString("male");
//             String qual = bundle.getString("SSC,HSC,BE/BTech,PG");

//             TextView tvName = findViewById(R.id.textView4);
//             TextView tvAge = findViewById(R.id.received_value_id);
//             TextView tvgen = findViewById(R.id.textView5);
//             TextView tvqual = findViewById(R.id.textView6);

//             tvName.setText(name);
//             tvAge.setText(sub);
//             tvgen.setText(gen);
//             tvqual.setText(qual);

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
//         android:id="@+id/editTextTextPersonName"
//         android:layout_width="377dp"
//         android:layout_height="59dp"
//         android:autofillHints="text"
//         android:ems="10"
//         android:hint="@string/first_name"
//         android:inputType="textPersonName"
//         android:text=""
//         app:layout_constraintBottom_toBottomOf="parent"
//         app:layout_constraintEnd_toEndOf="parent"
//         app:layout_constraintHorizontal_bias="0.352"
//         app:layout_constraintStart_toStartOf="parent"
//         app:layout_constraintTop_toTopOf="parent"
//         app:layout_constraintVertical_bias="0.105" />

//     <Spinner
//         android:id="@+id/spinner3"
//         android:layout_width="382dp"
//         android:layout_height="52dp"
//         android:layout_centerHorizontal="true"
//         android:layout_marginTop="100dp"
//         android:contentDescription="@string/select_bank"
//         app:layout_constraintBottom_toBottomOf="parent"
//         app:layout_constraintEnd_toEndOf="parent"
//         app:layout_constraintHorizontal_bias="0.482"
//         app:layout_constraintStart_toStartOf="parent"
//         app:layout_constraintTop_toTopOf="parent"
//         app:layout_constraintVertical_bias="0.234" />

//     <CheckBox
//         android:id="@+id/checkBox"
//         android:layout_width="100dp"
//         android:layout_height="wrap_content"
//         android:text="@string/ssc"
//         app:layout_constraintBottom_toBottomOf="parent"
//         app:layout_constraintEnd_toEndOf="parent"
//         app:layout_constraintHorizontal_bias="0.144"
//         app:layout_constraintStart_toStartOf="parent"
//         app:layout_constraintTop_toTopOf="parent"
//         app:layout_constraintVertical_bias="0.762" />

//     <CheckBox
//         android:id="@+id/checkBox2"
//         android:layout_width="100dp"
//         android:layout_height="wrap_content"
//         android:text="@string/hsc"
//         app:layout_constraintBottom_toBottomOf="parent"
//         app:layout_constraintEnd_toEndOf="parent"
//         app:layout_constraintHorizontal_bias="0.144"
//         app:layout_constraintStart_toStartOf="parent"
//         app:layout_constraintTop_toTopOf="parent"
//         app:layout_constraintVertical_bias="0.865" />

//     <CheckBox
//         android:id="@+id/checkBox3"
//         android:layout_width="100dp"
//         android:layout_height="wrap_content"
//         android:text="@string/be_btech"
//         app:layout_constraintBottom_toBottomOf="parent"
//         app:layout_constraintEnd_toEndOf="parent"
//         app:layout_constraintHorizontal_bias="0.868"
//         app:layout_constraintStart_toStartOf="parent"
//         app:layout_constraintTop_toTopOf="parent"
//         app:layout_constraintVertical_bias="0.752" />

//     <CheckBox
//         android:id="@+id/checkBox4"
//         android:layout_width="100dp"
//         android:layout_height="wrap_content"
//         android:text="@string/pg"
//         app:layout_constraintBottom_toBottomOf="parent"
//         app:layout_constraintEnd_toEndOf="parent"
//         app:layout_constraintHorizontal_bias="0.868"
//         app:layout_constraintStart_toStartOf="parent"
//         app:layout_constraintTop_toTopOf="parent"
//         app:layout_constraintVertical_bias="0.865" />

//     <RadioGroup
//         android:id="@+id/radioGroup"
//         android:layout_width="312dp"
//         android:layout_height="49dp"
//         android:layout_below="@+id/textView2"
//         android:layout_centerHorizontal="true"
//         android:orientation="horizontal"
//         android:showDividers="beginning|end"
//         app:layout_constraintBottom_toBottomOf="parent"
//         app:layout_constraintEnd_toEndOf="parent"
//         app:layout_constraintHorizontal_bias="0.373"
//         app:layout_constraintStart_toStartOf="parent"
//         app:layout_constraintTop_toTopOf="parent"
//         app:layout_constraintVertical_bias="0.56">

//         <RadioButton
//             android:id="@+id/radioButton"
//             android:layout_width="100dp"
//             android:layout_height="wrap_content"
//             android:text="@string/male1"
//             app:layout_constraintBottom_toBottomOf="parent"
//             app:layout_constraintEnd_toEndOf="parent"
//             app:layout_constraintHorizontal_bias="0.144"
//             app:layout_constraintStart_toStartOf="parent"
//             app:layout_constraintTop_toTopOf="parent"
//             app:layout_constraintVertical_bias="0.556"
//             android:checked="false" />

//         <RadioButton
//             android:id="@+id/radioButton2"
//             android:layout_width="100dp"
//             android:layout_height="wrap_content"
//             android:text="@string/female2"
//             app:layout_constraintBottom_toBottomOf="parent"
//             app:layout_constraintEnd_toEndOf="parent"
//             app:layout_constraintHorizontal_bias="0.868"
//             app:layout_constraintStart_toStartOf="parent"
//             app:layout_constraintTop_toTopOf="parent"
//             app:layout_constraintVertical_bias="0.568"
//             android:checked="true" />

//     </RadioGroup>

//     <TextView
//         android:id="@+id/textView"
//         android:layout_width="wrap_content"
//         android:layout_height="wrap_content"
//         android:text="@string/select_subject"
//         android:textStyle="bold"
//         app:layout_constraintBottom_toBottomOf="parent"
//         app:layout_constraintEnd_toEndOf="parent"
//         app:layout_constraintHorizontal_bias="0.045"
//         app:layout_constraintStart_toStartOf="parent"
//         app:layout_constraintTop_toTopOf="parent"
//         app:layout_constraintVertical_bias="0.245" />

//     <TextView
//         android:id="@+id/textView2"
//         android:layout_width="wrap_content"
//         android:layout_height="wrap_content"
//         android:text="@string/select_gender"
//         android:textStyle="bold"
//         app:layout_constraintBottom_toBottomOf="parent"
//         app:layout_constraintEnd_toEndOf="parent"
//         app:layout_constraintHorizontal_bias="0.062"
//         app:layout_constraintStart_toStartOf="parent"
//         app:layout_constraintTop_toTopOf="parent"
//         app:layout_constraintVertical_bias="0.466" />

//     <TextView
//         android:id="@+id/textView3"
//         android:layout_width="wrap_content"
//         android:layout_height="wrap_content"
//         android:text="@string/select_qualification"
//         android:textStyle="bold"
//         app:layout_constraintBottom_toBottomOf="parent"
//         app:layout_constraintEnd_toEndOf="parent"
//         app:layout_constraintHorizontal_bias="0.069"
//         app:layout_constraintStart_toStartOf="parent"
//         app:layout_constraintTop_toTopOf="parent"
//         app:layout_constraintVertical_bias="0.643" />

//     <Button
//         android:id="@+id/button"
//         android:layout_width="wrap_content"
//         android:layout_height="wrap_content"
//         android:text="@string/submit"
//         app:layout_constraintBottom_toBottomOf="parent"
//         app:layout_constraintEnd_toEndOf="parent"
//         app:layout_constraintStart_toStartOf="parent"
//         app:layout_constraintTop_toTopOf="parent"
//         app:layout_constraintVertical_bias="0.976" />

// </androidx.constraintlayout.widget.ConstraintLayout>

// activity_second.xml;

// <?xml version="1.0" encoding="utf-8"?>
// <androidx.constraintlayout.widget.ConstraintLayout xmlns:android="http://schemas.android.com/apk/res/android"
//     xmlns:app="http://schemas.android.com/apk/res-auto"
//     xmlns:tools="http://schemas.android.com/tools"
//     android:layout_width="match_parent"
//     android:layout_height="match_parent"
//     tools:context=".SecondActivity">

//     <TextView
//         android:id="@+id/received_value_id"
//         android:layout_width="300dp"
//         android:layout_height="50dp"
//         android:textSize="40sp"
//         android:textStyle="bold"
//         app:layout_constraintBottom_toBottomOf="parent"
//         app:layout_constraintEnd_toEndOf="parent"
//         app:layout_constraintHorizontal_bias="0.144"
//         app:layout_constraintStart_toStartOf="parent"
//         app:layout_constraintTop_toTopOf="parent"
//         app:layout_constraintVertical_bias="0.242" />

//     <TextView
//         android:id="@+id/textView4"
//         android:layout_width="300dp"
//         android:layout_height="50dp"
//         android:textSize="40sp"
//         android:textStyle="bold"
//         app:layout_constraintBottom_toBottomOf="parent"
//         app:layout_constraintEnd_toEndOf="parent"
//         app:layout_constraintHorizontal_bias="0.144"
//         app:layout_constraintStart_toStartOf="parent"
//         app:layout_constraintTop_toTopOf="parent"
//         app:layout_constraintVertical_bias="0.107" />

//     <TextView
//         android:id="@+id/textView5"
//         android:layout_width="300dp"
//         android:layout_height="50dp"
//         android:textSize="40sp"
//         android:textStyle="bold"
//         app:layout_constraintBottom_toBottomOf="parent"
//         app:layout_constraintEnd_toEndOf="parent"
//         app:layout_constraintHorizontal_bias="0.144"
//         app:layout_constraintStart_toStartOf="parent"
//         app:layout_constraintTop_toTopOf="parent"
//         app:layout_constraintVertical_bias="0.375" />

//     <TextView
//         android:id="@+id/textView6"
//         android:layout_width="wrap_content"
//         android:layout_height="wrap_content"
//         android:textSize="40sp"
//         android:textStyle="bold"
//         app:layout_constraintBottom_toBottomOf="parent"
//         app:layout_constraintEnd_toEndOf="parent"
//         app:layout_constraintHorizontal_bias="0.144"
//         app:layout_constraintStart_toStartOf="parent"
//         app:layout_constraintTop_toTopOf="parent"
//         app:layout_constraintVertical_bias="0.519" />

// </androidx.constraintlayout.widget.ConstraintLayout>
