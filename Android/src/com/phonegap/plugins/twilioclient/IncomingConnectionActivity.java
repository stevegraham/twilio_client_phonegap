package com.phonegap.plugins.twilioclient;

import android.app.Activity;
import android.content.Intent;
import android.support.v4.content.LocalBroadcastManager;

//import com.twilio.client.Connection;
//import com.twilio.client.Device;

/**
 * 
 * Class based on Twilio Android documentation on handling incoming calls with intents
 *
 */

public class IncomingConnectionActivity extends Activity {
	
	public static final String ACTION_NAME = "INCOMING_CONNECTION";
	  @Override
	    public void onNewIntent(Intent intent)
	    {
	        super.onNewIntent(intent);
	        setIntent(intent);
	    }
	  
	    @Override
	    public void onResume()
	    {
	        super.onResume();
	        Intent intent = getIntent();
	        LocalBroadcastManager lbm = LocalBroadcastManager.getInstance(this);
	        intent.setAction(ACTION_NAME);
	        lbm.sendBroadcast(intent);
	        
	    }
	    

}
