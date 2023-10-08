// Add the following dependencies to your app/build.gradle file
// implementation 'com.google.android.gms:play-services-maps:17.0.0'
// implementation 'com.google.android.gms:play-services-location:18.0.0'

// In your XML layout file (e.g., activity_main.xml), add a fragment for the map:
<fragment
    android:id="@+id/mapFragment"
    android:name="com.google.android.gms.maps.SupportMapFragment"
    android:layout_width="match_parent"
    android:layout_height="match_parent"
/>

// In your Java or Kotlin code, initialize and configure the GoogleMap object:
import com.google.android.gms.maps.GoogleMap;
import com.google.android.gms.maps.SupportMapFragment;
import com.google.android.gms.maps.OnMapReadyCallback;

public class MapsActivity extends AppCompatActivity implements OnMapReadyCallback {

    private GoogleMap mMap;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);

        SupportMapFragment mapFragment = (SupportMapFragment) getSupportFragmentManager()
                .findFragmentById(R.id.mapFragment);
        mapFragment.getMapAsync(this);
    }

    @Override
    public void onMapReady(GoogleMap googleMap) {
        mMap = googleMap;

        // Add a marker at a specific location (latitude, longitude) and set the title
        LatLng markerLocation = new LatLng(37.7749, -122.4194);
        mMap.addMarker(new MarkerOptions()
            .position(markerLocation)
            .title("San Francisco"));

        // Move the camera to the marker's location and set zoom level
        mMap.moveCamera(CameraUpdateFactory.newLatLngZoom(markerLocation, 12));
    }
}
