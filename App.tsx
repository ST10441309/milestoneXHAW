import { useState } from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  ScrollView,
} from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';

function Home() {
  
  return (
    <ScrollView>
    <View style={styles.container}>
      <Image style={styles.logo} source={require('./assets/logo.png')}/>
      <Text style={styles.headingText}>Elavate Yourself</Text>
      <Text style={styles.subHeadingText}>Courses Designed for Personal Growth and Success</Text>
      <Text style={styles.normalText}>
      Founded in 2018, Empowering the Nation offers comprehensive courses in Johannesburg, designed to uplift and equip people. Through our six-month Learnerships and six-week short skills Training Programmes, hundreds have gained valuable, marketable skills to enhance their careers and empower themselves.
      </Text>
    </View>
    </ScrollView>
  ); 
}


function About() {
  return (
    <ScrollView>
    <View style={styles.container}>

      <Text style={styles.headingText}> Our Founder </Text>
      <Text style={styles.normalText}>
      Precious Radebe is a visionary leader who recognized the need for accessible and effective education for individuals seeking to transform their lives and careers. With a passion for community development and lifelong learning, they established Empowering the Nation to provide skills-based education that is both practical and empowering.
      </Text>
      <Text style={styles.normalText}>
      Under their leadership, Empowering the Nation has grown from a single training initiative into a recognized institution in Johannesburg, changing the lives of hundreds. The founder’s dedication to making education accessible to all is driven by a core belief: that everyone, regardless of their background, has the potential to achieve great things with the right guidance and support.
      </Text>
      <Text style={styles.normalText}>
      Precious Radebe's vision continues to shape the ethos of Empowering the Nation—one where learning is the key to personal empowerment and community transformation.
      </Text>

      <Text style={styles.headingText}> About us </Text>
      <Text style={styles.normalText}>
      Founded in 2018, Empowering the Nation is committed to uplifting and equipping individuals with practical, marketable skills through our high-quality training programmes in Johannesburg. Our mission is to bridge the gap between potential and opportunity by providing tailored educational solutions for personal and professional development.
      </Text>
      <Text style={styles.normalText}>
      With a range of six-month Learnerships and intensive six-week short skills Training Programmes, we have empowered hundreds of individuals to enhance their careers, unlock new opportunities, and contribute positively to their communities. Whether you are looking to enter a new field, upskill in your current role, or build a stronger foundation for your future, Empowering the Nation is here to support your journey.
      </Text>
      <Text style={styles.normalText}>
      We believe that through education, we can build a stronger, more empowered nation—one individual at a time.
      </Text>
    </View>
    </ScrollView>
  );
}

function Six_Week_Course() {
  return (
    <ScrollView>
    <View style={styles.centerContainer}>

    <View style={styles.contentContainer}>
      <Text style={styles.contentHeader}>Child Minding</Text>
      <Text style={styles.contentPrice}>R750</Text>
      <View style={styles.contentImage}>
        <Image source={require('./assets/ChildMinding.png')} />
      </View>
      <View style={styles.listContainer}>
        {[
          "Birth to six month old baby needs",
          "Seven-month to one year old needs",
          "Toddler needs",
          "Educational toys"
        ].map((item, index) => (
          <View key={index} style={styles.listItem}>
            <Text style={styles.bullet}>•</Text>
            <Text style={styles.listText}>{item}</Text>
          </View>
        ))}
      </View>
    </View>

    <View style={styles.contentContainer}>
      <Text style={styles.contentHeader}>Cooking</Text>
      <Text style={styles.contentPrice}>R750</Text>
      <View style={styles.contentImage}>
        <Image source={require('./assets/Cooking.png')} />
      </View>
      <View style={styles.listContainer}>
        {[
          "Nutritional requirements",
          "Planning meals",
          "Preparation and cooking meals",
          "Types of protein, carbohydrates & vegatables",
        ].map((item, index) => (
          <View key={index} style={styles.listItem}>
            <Text style={styles.bullet}>•</Text>
            <Text style={styles.listText}>{item}</Text>
          </View>
        ))}
      </View>
    </View>

    <View style={styles.contentContainer}>
      <Text style={styles.contentHeader}>Garden Maintenance</Text>
      <Text style={styles.contentPrice}>R750</Text>
      <View style={styles.contentImage}>
        <Image source={require('./assets/GardenMaintenance.png')} />
      </View>
      <View style={styles.listContainer}>
        {[
          "Water restrictions",
          "Watering requirements",
          "Pruning and propagation of plants",
          "Planting techniques"
        ].map((item, index) => (
          <View key={index} style={styles.listItem}>
            <Text style={styles.bullet}>•</Text>
            <Text style={styles.listText}>{item}</Text>
          </View>
        ))}
      </View>
    </View>

    </View>
    </ScrollView>
  );
}

function Six_Month_Course() {
  return (
    <ScrollView>
    <View style={styles.centerContainer}>
    
    <View style={styles.contentContainer}>
      <Text style={styles.contentHeader}>First Aid</Text>
      <Text style={styles.contentPrice}>R1500</Text>
      <View style={styles.contentImage}>
        <Image source={require('./assets/FirstAid.png')} />
      </View>
      <View style={styles.listContainer}>
        {[
          "Wounds & bleeding",
          "Burns & fractures",
          "Emergency scene management",
          "Cardio-Pulmonary Resuscitation",
          "Respiratory distress"
        ].map((item, index) => (
          <View key={index} style={styles.listItem}>
            <Text style={styles.bullet}>•</Text>
            <Text style={styles.listText}>{item}</Text>
          </View>
        ))}
      </View>
    </View>

    <View style={styles.contentContainer}>
      <Text style={styles.contentHeader}>Sewing</Text>
      <Text style={styles.contentPrice}>R1500</Text>
      <View style={styles.contentImage}>
        <Image source={require('./assets/Sewing.png')} />
      </View>
      <View style={styles.listContainer}>
        {[
          "Types of stitches",
          "Threading a sewing machine",
          "Sewing buttons, zips, hems & seams",
          "Alterations",
          "Designing & sewing new garments"
        ].map((item, index) => (
          <View key={index} style={styles.listItem}>
            <Text style={styles.bullet}>•</Text>
            <Text style={styles.listText}>{item}</Text>
          </View>
        ))}
      </View>
    </View>

    <View style={styles.contentContainer}>
      <Text style={styles.contentHeader}>Landscaping</Text>
      <Text style={styles.contentPrice}>R1500</Text>
      <View style={styles.contentImage}>
        <Image source={require('./assets/Landscaping.png')} />
      </View>
      <View style={styles.listContainer}>
        {[
          "Indigenous & exotic plants & trees",
          "Fixed structures",
          "Balancing of plants & trees in a garden",
          "Aesthetics of plant shapes & colours",
          "Garden layout"
        ].map((item, index) => (
          <View key={index} style={styles.listItem}>
            <Text style={styles.bullet}>•</Text>
            <Text style={styles.listText}>{item}</Text>
          </View>
        ))}
      </View>
    </View>

    <View style={styles.contentContainer}>
      <Text style={styles.contentHeader}>Life Skills</Text>
      <Text style={styles.contentPrice}>R1500</Text>
      <View style={styles.contentImage}>
        <Image source={require('./assets/LifeSkills.png')} />
      </View>
      <View style={styles.listContainer}>
        {[
          "Opening a bank account",
          "Basic labour law",
          "Basic reading & writing literacy",
          "Basic numeric literacy"
        ].map((item, index) => (
          <View key={index} style={styles.listItem}>
            <Text style={styles.bullet}>•</Text>
            <Text style={styles.listText}>{item}</Text>
          </View>
        ))}
      </View>
    </View>

  </View>
    </ScrollView>
  );
}

function Contact() {
  return (
    <ScrollView>
    <View style={styles.container}>
      <Text style={styles.headingText}> Locations: </Text>
      <Image style={styles.imageContainer} source={require('./assets/location_icon.png')}/>
      <Image style={styles.imageContainer} source={require('./assets/location_icon.png')}/>
      <Image style={styles.imageContainer} source={require('./assets/location_icon.png')}/>

      <Text style={styles.normalText}> Socials: </Text>
      <Text style={styles.normalText}> Instagram: </Text>
      <Text style={styles.normalText}> WhatsApp: </Text>
    </View>
    </ScrollView>
  );
}

function Query() {
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [contact, setContact] = useState('');
  const [email, setEmail] = useState('');
  const [cardInfo, setCardInfo] = useState('');
  const [total, setTotal] = useState('');

  return (
    
    <ScrollView>
    <View style={styles.centerContainer}>
    
    <View style={styles.formContainer}>
    <Text style={styles.formHeader}>We're Eager to hear from you</Text>
    <Text style= {styles.formSubHeader}>Please submit your information and a representative will get in touch with you</Text>
      <Text style={styles.formText}>First Name</Text>
      <TextInput
        style={styles.input}
        onChangeText={setName}
        value={name}
        placeholder='Your first name'
      />

      <Text style={styles.formText}>Last Name</Text>
      <TextInput
        style={styles.input}
        onChangeText={setSurname}
        value={surname}
        placeholder='Your last name'
      />

      <Text style={styles.formText}>Phone</Text>
      <TextInput
        style={styles.input}
        onChangeText={setContact}
        value={contact}
        placeholder='Your phone number'
      />

      <Text style={styles.formText}>E-Mail</Text>
      <TextInput
        style={styles.input}
        onChangeText={setEmail}
        value={email}
        placeholder='Your e-mail'
      />
      
      <Text style={styles.formText}>Total</Text>
      <TextInput
        style={styles.input}
        onChangeText={setTotal}
        value={total}
      />
    </View>
    </View>
    </ScrollView>
  );
}


const Drawer = createDrawerNavigator();

function MyDrawer() {
  return (
    <Drawer.Navigator initialRouteName='Home'>
      <Drawer.Screen
        name='Home'
        component={Home}
        options={{ drawerLabel: 'Home'}}
      />

      <Drawer.Screen
        name='About'
        component={About}
        options={{ drawerLabel: 'About us'}}
      />

      <Drawer.Screen
        name='Six-Week Course'
        component={Six_Week_Course}
        options={{ drawerLabel: 'Six-Week Course'}}
      />

      <Drawer.Screen
        name='Six-Month Course'
        component={Six_Month_Course}
        options={{ drawerLabel: 'Six-Month Course'}}
      />

      <Drawer.Screen
        name='Contact'
        component={Contact}
        options={{ drawerLabel: 'Contact us'}}
      />

      <Drawer.Screen
        name='Query'
        component={Query}
        options={{ drawerLabel: 'Get a quote'}}
      />
    </Drawer.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <MyDrawer/>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#ECB176',
    height: 1400,
  },
  centerContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
  },
  navigatorContainer: {
    flex: 1,
    backgroundColor: '#808080'
  },
  imageContainer: {
    resizeMode: 'contain',
    height: 150,
    width: 250,
    alignItems: 'center',
    justifyContent: 'center',
  },
  contentContainer: {
    margin: 10,
    padding: 20,
    backgroundColor: '#ECB176',
    alignContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    width: 300,
    height: 500,
    shadowColor: "#000",
    shadowOffset: {
    width: 2,
    height: 2,
    },
    shadowOpacity: 0.50,
    shadowRadius: 3.84,
    elevation: 5,
  },
  contentHeader: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  contentPrice: {
    fontSize: 22,
    marginBottom: 20,
  },
  contentImage: {
    width: 100,
    height: 100,
    borderRadius: 50,  
    backgroundColor: '#E0E0E0',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
    overflow: 'hidden',
  },
  listContainer: {
    alignContent: 'center',
  },
  listItem: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: 5,
  },
  bullet: {
    fontSize: 16,
    lineHeight: 26,
    marginRight: 5,
  },
  listText: {
    fontSize: 20,
    lineHeight: 26,
  },
  headingText: {
    fontSize: 48,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 10,
    marginBottom: 10,
  },
  subHeadingText: {
    fontSize: 26,
    marginBottom: 10,
    marginTop: 10,
    textAlign: 'center',
  },
  normalText: {
    fontSize: 22,
    lineHeight: 28,
    color: 'black',
    margin: 10,
    marginBottom: 10,
    marginTop: 10,
    textAlign: 'center',
  },
  formContainer: {
    margin: 10,
    padding: 20,
    backgroundColor: '#ECB176',
    borderRadius: 5,
    width: 500,
    height: 900,
    shadowColor: "#000",
    shadowOffset: {
    width: 2,
    height: 2,
    },
    shadowOpacity: 0.50,
    shadowRadius: 3.84,
    elevation: 5,
  },
  formHeader: {
    fontSize: 35,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 30,
  },
  formSubHeader: {
    fontSize: 26,
    marginBottom: 30,
    textAlign: 'center',
  },
  formText: {
    fontSize: 20,
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    borderRadius: 15,
    padding: 10,
    marginBottom: 30,
  },
  logo: {
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
    marginLeft: 180,
  }
});

