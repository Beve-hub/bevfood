import { View, Text, Image , TouchableOpacity,} from 'react-native'
import React from 'react'
import IMG from '../../assets/images/profile.png'
import { EvilIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';

const Profile = () => {
  const router = useRouter();
  return (
    <View style={{ justifyContent: 'center', paddingVertical: 30, paddingHorizontal:20 }}>
      <Text style={{fontSize:25, fontWeight:'bold'}}>Profile</Text>

      <View style={{ justifyContent: 'center', alignItems:'center',marginTop:40, gap:20}}>
        <Image source={IMG} style={{width:100,height:100}}/>
        <Text style={{fontSize:20, fontWeight:'bold'}}>James Johnny</Text>
      </View>


      <View style={{marginTop:60, flexDirection: 'grid', alignItems:'flex-start',justifyContent: 'center', gap:20}}>
      <TouchableOpacity   style={{marginTop:10, flexDirection: 'row', paddingVertical: 5,gap:10, paddingHorizontal: 10, borderRadius:10, alignItem:'center'  }}>
      <EvilIcons name="user" size={30} color="black" />
        <Text style={{ fontSize: 18, fontWeight:'normal', }}>Edit Profile</Text>
       </TouchableOpacity>

       <TouchableOpacity   style={{marginTop:10, flexDirection: 'row', paddingVertical: 5,gap:10, paddingHorizontal: 10, borderRadius:10, alignItem:'center'  }}>
       <EvilIcons name="redo" size={33} color="black" />
        <Text style={{ fontSize: 18, fontWeight:'normal', }}>Order History</Text>
       </TouchableOpacity>

       <TouchableOpacity   style={{marginTop:10, flexDirection: 'row', paddingVertical: 5,gap:10, paddingHorizontal: 10, borderRadius:10, alignItem:'center'  }}>
       <Ionicons name="notifications-outline" size={24} color="black" />
        <Text style={{ fontSize: 18, fontWeight:'normal', }}>Notifications</Text>
       </TouchableOpacity>

       <TouchableOpacity   style={{marginTop:10, flexDirection: 'row', paddingVertical: 5,gap:10, paddingHorizontal: 10, borderRadius:10, alignItem:'center'  }}>
       <Ionicons name="ios-settings-outline" size={24} color="black" />
        <Text style={{ fontSize: 18, fontWeight:'normal', }}>Settings</Text>
       </TouchableOpacity>

       <TouchableOpacity  onPress={() => router.push('../screen/Landscreen')} style={{marginTop:10, flexDirection: 'row', paddingVertical: 5,gap:10, paddingHorizontal: 10, borderRadius:10, alignItem:'center'  }}>
       <MaterialIcons name="logout" size={24} color="black" />
        <Text style={{ fontSize: 18, fontWeight:'normal', }}>Log Out</Text>
       </TouchableOpacity>
      </View>
    </View>
  )
}

export default Profile