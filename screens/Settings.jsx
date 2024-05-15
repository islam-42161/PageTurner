import { Dimensions, Pressable, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import MainContainer from '../components/MainContainer'
import { COLORS, FONTSIZE, FONTWEIGHT, SPACING } from '../const/theme'
import { Image } from 'expo-image'
import { Ionicons, MaterialCommunityIcons, MaterialIcons, AntDesign } from '@expo/vector-icons';

const { height, width } = Dimensions.get('window')
const AVATAR_SIZE = width * 0.45

const Settings = ({ route, navigation }) => {
  return (
    <MainContainer title={"Settings"} navigation={navigation} route={route}>
      <View style={styles.container}>
        {/* Avatar */}
        <View style={styles.top_container}>

        <Pressable style={styles.avatar_container}>
          <View style={styles.avatar}>
            <Image
              style={StyleSheet.absoluteFill}
              source={'https://scontent.xx.fbcdn.net/v/t1.15752-9/440853280_1488374208414442_1216537300279954498_n.jpg?stp=dst-jpg_s403x403&_nc_cat=100&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeEMAv1rrQFCNUFOaXgnJL9xYDyY2yx84pZgPJjbLHzilm2JcGloJSK_GVBTLLgEXs-lEU4L-10J7Of5FFjrdKga&_nc_ohc=6u-6GyiHnGgQ7kNvgGk1pHD&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_Q7cD1QHaCStlvt5GR8cZ-RgqbRaxKtvHc1B9aELgAJK0R4mrag&oe=666C7E71'}
              contentFit="cover"
              transition={1000}
            />
          </View>
        </Pressable>
        <View style={{flex:1,justifyContent:'space-between',alignItems:'flex-end',backgroundColor:COLORS.light2,padding:SPACING.lg,borderRadius:SPACING.sm,gap:SPACING.lg}}>
          <TouchableOpacity style={{height:32,width:32,alignItems:'center',justifyContent:'center',backgroundColor:COLORS.accent2,borderRadius:18}}>
        <MaterialCommunityIcons name="circle-edit-outline" size={24} color={COLORS.light2} />
        </TouchableOpacity>
          <View>
          <Text style={{...styles.title,textAlign:'right',color:COLORS.accent2}}>Naseeruddin Shah Pachaa</Text>
          <Text style={{...styles.sub_title,textAlign:'right'}}>itak@ppless.com</Text>
          </View>
        </View>
        
        </View>

        {/* Menu */}
        <View style={styles.menu}>
          <Pressable style={{ ...styles.menu_row, borderTopLeftRadius: SPACING.sm, borderTopRightRadius: SPACING.sm }}>
            <View style={styles.icon}>
              <Ionicons name="library-outline" size={24} color={COLORS.accent2} />
            </View>
            <View style={styles.info}>
              <Text style={styles.title}>My Shelf</Text>
              <Text style={styles.sub_title}>All saved books</Text>
            </View>
          </Pressable>
          <Pressable style={{ ...styles.menu_row }}>
            <View style={styles.icon}>
              <Ionicons name="timer-outline" size={24} color={COLORS.accent2} />
            </View>
            <View style={styles.info}>
              <Text style={styles.title}>Order History</Text>
              <Text style={styles.sub_title}>List of all your orders</Text>
            </View>
          </Pressable>

          <Pressable style={{ ...styles.menu_row }}>
            <View style={styles.icon}>
              <MaterialCommunityIcons name="target" size={24} color={COLORS.accent2} />
            </View>
            <View style={styles.info}>
              <Text style={styles.title}>Track Your Order</Text>
              <Text style={styles.sub_title}>Order Journey: From Click to Delivery!</Text>
            </View>
          </Pressable>
          {/* <Pressable style={{...styles.menu_row}}>
<View style={styles.icon}>
<MaterialCommunityIcons name="account-edit-outline" size={24} color={COLORS.accent2} />
</View>
<View style={styles.info}>
  <Text style={styles.title}>Edit Profile</Text>
  <Text style={styles.sub_title}>Change your name</Text>
</View>
</Pressable> */}
          <Pressable style={{ ...styles.menu_row }}>
            <View style={styles.icon}>
              <MaterialIcons name="password" size={24} color={COLORS.accent2} />
            </View>
            <View style={styles.info}>
              <Text style={styles.title}>Change Password</Text>
              <Text style={styles.sub_title}>Secure Your Account: Update Your Password</Text>
            </View>
          </Pressable>
          <Pressable style={{ ...styles.menu_row, borderBottomLeftRadius: SPACING.sm, borderBottomRightRadius: SPACING.sm }}>
            <View style={styles.icon}>
              <AntDesign name="team" size={24} color={COLORS.accent2} />
            </View>
            <View style={styles.info}>
              <Text style={styles.title}>Meet the Team</Text>
              <Text style={styles.sub_title}>Collaborators Extraordinaire: Get to Know Us!</Text>
            </View>
          </Pressable>
        </View>
        <TouchableOpacity style={{ padding: SPACING.lg, backgroundColor: COLORS.accent2, marginHorizontal: SPACING.lg, marginBottom: SPACING.lg, alignItems: 'center', borderRadius: SPACING.sm }}><Text style={{ ...styles.title, color: COLORS.light1 }}>Log Out</Text></TouchableOpacity>
      </View>
    </MainContainer>
  )
}

export default Settings

const styles = StyleSheet.create({
  container: {
    gap: SPACING.lg,
    flex: 1,
    justifyContent: 'space-between'
  },
  top_container: {
    flexDirection: 'row',
    gap: SPACING.lg,
    marginHorizontal:SPACING.lg
  },
  avatar_container: {
    height: AVATAR_SIZE, width: AVATAR_SIZE, borderRadius: AVATAR_SIZE / 2, padding: SPACING.xs, borderWidth: 2, borderColor: COLORS.accent2
  },
  avatar: { width: "100%", aspectRatio: 1, borderRadius: AVATAR_SIZE / 2, overflow: 'hidden' },
  menu: {
    flex: 1,
    // backgroundColor:'red',
    marginHorizontal: SPACING.lg,
    gap: 1
  },
  menu_row: {
    flexDirection: 'row',
    gap: SPACING.lg,
    backgroundColor: COLORS.accent1,
    padding: SPACING.lg
  },
  title: {
    fontWeight: FONTWEIGHT.bold,
    fontSize: FONTSIZE.subheading
  },
  sub_title: {
    fontWeight: FONTWEIGHT.light,
    fontSize: FONTSIZE.body,
  },
  icon: {
    height: SPACING.xxl, width: SPACING.xxl,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(255,255,255,0.3)',
    borderRadius: SPACING.sm
  },
  info: {
    flex: 1,
  }
})