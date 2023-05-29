// ContactModel;
// package com.example.recycleview;

// public class ContactModel {
//     String name,number;

//     public ContactModel(String name,String number){
//         this.name=name;
//         this.number=number;

//     }
// }

// MainActivity;

// package com.example.recycleview;
// import android.os.Bundle;
// import androidx.appcompat.app.AppCompatActivity;
// import androidx.recyclerview.widget.LinearLayoutManager;
// import androidx.recyclerview.widget.RecyclerView;
// import java.util.ArrayList;

// public class MainActivity extends AppCompatActivity {
//     ArrayList<ContactModel> arrcontacts = new ArrayList<>();

//     @Override
//     protected void onCreate(Bundle savedInstanceState) {
//         super.onCreate(savedInstanceState);
//         setContentView(R.layout.activity_main);

//         RecyclerView recyclerView = findViewById(R.id.myrecyc);
//         recyclerView.setLayoutManager(new LinearLayoutManager(this));

//         arrcontacts.add(new ContactModel("Rohit","8825424736"));
//         arrcontacts.add(new ContactModel("Ishan","7815336645"));
//         arrcontacts.add(new ContactModel("Surya","9783120054"));
//         arrcontacts.add(new ContactModel("Nehal","7772236569"));
//         arrcontacts.add(new ContactModel("Tilak","9890080555"));
//         arrcontacts.add(new ContactModel("Green","8862002179"));
//         arrcontacts.add(new ContactModel("Tim David","8261841985"));
//         arrcontacts.add(new ContactModel("Piyush","9545454789"));
//         arrcontacts.add(new ContactModel("Kartikey","8421123854"));
//         arrcontacts.add(new ContactModel("Jofra","8484972280"));
//         arrcontacts.add(new ContactModel("Arjun","7351315411"));
//         arrcontacts.add(new ContactModel("DB","8208308503"));
//         arrcontacts.add(new ContactModel("bumraha","9890065563"));
//         arrcontacts.add(new ContactModel("Sachin","722345548"));

//         RecyclerContactAdapter adapter = new RecyclerContactAdapter(this, arrcontacts);
//         recyclerView.setAdapter(adapter);
//     }
// }

// RecyclerContactAdapter;

// package com.example.recycleview;

// import android.content.Context;
// import android.view.LayoutInflater;
// import android.view.View;
// import android.view.ViewGroup;
// import android.widget.TextView;
// import androidx.annotation.NonNull;
// import androidx.recyclerview.widget.RecyclerView;
// import java.util.ArrayList;

// public class RecyclerContactAdapter extends RecyclerView.Adapter<RecyclerContactAdapter.ViewHolder> {

//     Context context;
//     ArrayList<ContactModel> arrContacts;

//     RecyclerContactAdapter(Context context,ArrayList<ContactModel> arrContacts ){
//         this.context=context;
//         this.arrContacts=arrContacts;
//     }
//     @NonNull
//     @Override
//     public ViewHolder onCreateViewHolder(@NonNull ViewGroup parent, int viewType) {
//         View view = LayoutInflater.from(context).inflate(R.layout.contact_row ,parent,false);
//         ViewHolder viewHolder = new ViewHolder(view);
//         return viewHolder;
//     }
//     @Override
//     public void onBindViewHolder(@NonNull ViewHolder holder, int position) {
//         holder.txtName.setText(arrContacts.get(position).name);
//         holder.txtNumber.setText(arrContacts.get(position).number);
//     }
//     @Override
//     public int getItemCount() {
//         return arrContacts.size();
//     }

//     public static class ViewHolder extends RecyclerView.ViewHolder{
//         TextView txtName,txtNumber;
//         public ViewHolder(@NonNull View itemView){
//             super(itemView);
//             txtName=itemView.findViewById(R.id.txtName);
//             txtNumber=itemView.findViewById(R.id.txtNumber);

//         }
//     }
// }

// activity_main.xml;

// <?xml version="1.0" encoding="utf-8"?>
// <LinearLayout xmlns:android="http://schemas.android.com/apk/res/android"
//     xmlns:app="http://schemas.android.com/apk/res-auto"
//     xmlns:tools="http://schemas.android.com/tools"
//     android:layout_width="match_parent"
//     android:layout_height="match_parent"
//     tools:context=".MainActivity">

//     <androidx.recyclerview.widget.RecyclerView
//         android:layout_width="match_parent"
//         android:layout_height="wrap_content"
//         android:id="@+id/myrecyc"/>

// </LinearLayout>

// contact_row.xml;

// <?xml version="1.0" encoding="utf-8"?>
// <LinearLayout xmlns:android="http://schemas.android.com/apk/res/android"
//     android:layout_width="match_parent"
//     android:layout_height="wrap_content"
//     android:gravity="center"
//     android:background="#776224"
//     xmlns:app="http://schemas.android.com/apk/res-auto">

//     <androidx.cardview.widget.CardView
//         android:layout_width="match_parent"
//         android:layout_height="wrap_content"
//         android:backgroundTint="#F4F0CE"
//         app:cardUseCompatPadding="true">

//         <ImageView
//             android:layout_width="90dp"
//             android:layout_height="90dp"
//             android:id="@+id/imgContact"
//             android:src="@drawable/contact"/>

//         <LinearLayout
//             android:layout_width="match_parent"
//             android:layout_height="wrap_content"
//             android:gravity="center_vertical"
//             android:id="@+id/llRow"
//             android:orientation="vertical"
//             android:padding="15dp">

//             <TextView
//                 android:layout_width="match_parent"
//                 android:layout_height="wrap_content"
//                 android:id="@+id/txtName"
//                 android:text="User"
//                 android:textColor="#000000"
//                 android:textSize="25sp"
//                 android:gravity="center"/>
//             <TextView
//                 android:layout_width="match_parent"
//                 android:layout_height="wrap_content"
//                 android:id="@+id/txtNumber"
//                 android:text="XXXXXXXXXXX"
//                 android:textColor="#000000"
//                 android:textSize="20sp"
//                 android:gravity="center"/>
//         </LinearLayout>
//     </androidx.cardview.widget.CardView>

// </LinearLayout>
