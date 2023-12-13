import React, { useState } from 'react';
import { View, Text, Switch, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';

export default function NotificationSettings() {
  const [matchesPush, setMatchesPush] = useState(false);
  const [matchesEmail, setMatchesEmail] = useState(false);
  const [discussionsPush, setDiscussionsPush] = useState(false);
  const [discussionsEmail, setDiscussionsEmail] = useState(false);
  const [offersPush, setOffersPush] = useState(false);
  const [offersEmail, setOffersEmail] = useState(false);

  return (
    <ScrollView style={styles.container}>
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>E-mail</Text>
        <View style={styles.emailContainer}>
          <Text style={styles.emailText}>mailuser@mail.com</Text>
          <TouchableOpacity onPress={() => {}}>
            <Text style={styles.changeText}>changer</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Notifications Matches</Text>
        <View style={styles.switchContainer}>
          <Text style={styles.switchLabel}>Pushs</Text>
          <Switch
            trackColor={{ false: '#767577', true: '#f4c2c2' }}
            thumbColor={matchesPush ? '#f06292' : '#f4f3f4'}
            ios_backgroundColor="#3e3e3e"
            onValueChange={setMatchesPush}
            value={matchesPush}
          />
        </View>
        <View style={styles.switchContainer}>
          <Text style={styles.switchLabel}>E-mail</Text>
          <Switch
            trackColor={{ false: '#767577', true: '#f4c2c2' }}
            thumbColor={matchesEmail ? '#f06292' : '#f4f3f4'}
            ios_backgroundColor="#3e3e3e"
            onValueChange={setMatchesEmail}
            value={matchesEmail}
          />
        </View>
      </View>


      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Discussions</Text>
        <View style={styles.switchContainer}>
          <Text style={styles.switchLabel}>Pushs</Text>
          <Switch
            trackColor={{ false: '#767577', true: '#f4c2c2' }}
            thumbColor={discussionsPush ? '#f06292' : '#f4f3f4'}
            ios_backgroundColor="#3e3e3e"
            onValueChange={setDiscussionsPush}
            value={discussionsPush}
          />
        </View>
        <View style={styles.switchContainer}>
          <Text style={styles.switchLabel}>E-mail</Text>
          <Switch
            trackColor={{ false: '#767577', true: '#f4c2c2' }}
            thumbColor={discussionsEmail ? '#f06292' : '#f4f3f4'}
            ios_backgroundColor="#3e3e3e"
            onValueChange={setDiscussionsEmail}
            value={discussionsEmail}
          />
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Offres & Événement</Text>
        <View style={styles.switchContainer}>
          <Text style={styles.switchLabel}>Pushs</Text>
          <Switch
            trackColor={{ false: '#767577', true: '#f4c2c2' }}
            thumbColor={offersPush ? '#f06292' : '#f4f3f4'}
            ios_backgroundColor="#3e3e3e"
            onValueChange={setOffersPush}
            value={offersPush}
          />
        </View>
        <View style={styles.switchContainer}>
          <Text style={styles.switchLabel}>E-mail</Text>
          <Switch
            trackColor={{ false: '#767577', true: '#f4c2c2' }}
            thumbColor={offersEmail ? '#f06292' : '#f4f3f4'}
            ios_backgroundColor="#3e3e3e"
            onValueChange={setOffersEmail}
            value={offersEmail}
          />
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop:20,
  },
  section: {
    paddingHorizontal: 20,
    marginTop: 10,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
  },
  emailContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  emailText: {
    fontSize: 16,
    color: '#333',
  },
  changeText: {
    fontSize: 16,
    color: '#f06292',
    fontWeight: 'bold',
  },
  switchContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  switchLabel: {
    fontSize: 16,
    color: '#333',
  },
  // Ajoutez d'autres styles si nécessaire
});
