### Utilisateurs
- `ID_Utilisateur` INT PRIMARY KEY
- `Prenom` VARCHAR
- `Nom` VARCHAR
- `Email` VARCHAR UNIQUE
- `MotDePasse` VARCHAR
- `NumeroDeTelephone` VARCHAR
- `Genre` VARCHAR
- `Orientation` VARCHAR
- `DateDeNaissance` DATE
- `Adresse` VARCHAR
- `PhotoDeProfil` VARCHAR
- `Points` INT

### Cartes
- `ID_Carte` INT PRIMARY KEY
- `ID_Proprietaire` INT, FOREIGN KEY vers `Utilisateurs`
- `Revele` BOOLEAN
- `PointsRequis` INT

### Messages
- `ID_Message` INT PRIMARY KEY
- `ID_Envoyeur` INT, FOREIGN KEY vers `Utilisateurs`
- `ID_Recepteur` INT, FOREIGN KEY vers `Utilisateurs`
- `Message` TEXT
- `Horodatage` TIMESTAMP

### Notifications
- `ID_Notification` INT PRIMARY KEY
- `ID_Utilisateur` INT, FOREIGN KEY vers `Utilisateurs`
- `RecevoirNotifications` BOOLEAN

### Points
- `ID_Point` INT PRIMARY KEY
- `ID_Utilisateur` INT, FOREIGN KEY vers `Utilisateurs` ???????
- `Score` INT

### Relations
- `ID_Relation` INT PRIMARY KEY
- `ID_Utilisateur` INT, FOREIGN KEY vers `Utilisateurs`
- `ID_AutreUtilisateur` INT, FOREIGN KEY vers `Utilisateurs`
