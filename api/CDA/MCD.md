+------------------+   1     N   +---------+   N     1   +----------------+
|   Utilisateurs   |<--------->|  Cartes  |<--------->|  Notifications  |
+------------------+           +---------+           +----------------+
| ID_Utilisateur:PK|           | ID_Carte:PK         | | ID_Notif: PK   |
| Email            |           | ID_Utilisateur:FK   | | ID_Utilisateur:FK|
| MotDePasse       |           | Revele              | | RecevoirNotif  |
| Nom              |           | PointsRequis        | +----------------+
| Prenom           |           +---------+                               
+-------^----------+                     |                               
        |                                |                               
        | 0..N                          | N                             
        |                                +--------------+               
        |                                |  Messages   |<--------------+
        |                                +--------------+               |
        |                                | ID_Message:PK|               |
        |                                | ID_Envoyeur:FK|------------+ |
        |                                | ID_Recepteur:FK|-----------+ |
        |                                | Message        |             |
        |                                | Horodatage     |             |
        |                                +----------------+             |
        |                                                              |
        |                                                              |
 N +----+----+ 1                                                    N +----+----+ 1
+--| Relations |<---------------------------------------------------+--| Points |<--+
|  +-----------+                                                    |  +--------+   |
|  | ID_Relation:PK |-----------------------------------------------|->| ID_Point:PK|
|  | ID_Utilisateur1:FK|-----------------+                          |  | ID_Relation:FK|
|  | ID_Utilisateur2:FK|-----------------|--------------------------+  | Score        |
|  +-------------------+                 |                             +--------------+
|                                        |                                            
|                                        | N                                       
|                                        |                                         
|  N +------------+ 1                    |                                         
+->| | Préférences |<--------------------+                                         
   +--------------+                                                                
   | ID_Pref: PK  |<-------------------+                                          
   | ID_Utilisateur:FK  |              |                                          
   | ID_Badge: FK (Optionnel) |--------+                                          
   | PreferenceType       |                                                      
   | PreferenceValue      |                                                      
   +----------------------+                                                      
                     |                                                           
                     | N                                                         
             +-------+-------+                                                   
             |     Badges    |                                                   
             +---------------+                                                   
             | ID_Badge: PK  |                                                   
             | NomBadge      |                                                   
             | Description   |                                                   
             +---------------+                                                   
Utilisateurs : Représente les utilisateurs de l'application avec leurs informations personnelles.

Cartes : Peut représenter des profils ou des fonctionnalités que les utilisateurs peuvent "swipe" ou interagir avec.

Notifications : Notifications envoyées aux utilisateurs, basées sur divers événements ou actions dans l'application.

Messages : Gère les messages échangés entre les utilisateurs.

Relations : Représente les matches ou connexions établies entre les utilisateurs. Chaque relation est unique à une paire d'utilisateurs.

Points : Points accumulés dans le contexte de chaque relation entre utilisateurs, potentiellement basés sur les interactions ou les messages échangés.

Préférences : Gère les préférences des utilisateurs, y compris celles liées aux badges. Les préférences peuvent contrôler divers aspects comme la visibilité des badges, les notifications, etc.

Badges : Représente les récompenses ou distinctions attribuées aux utilisateurs.Lié aux préférences pour gérer comment ces badges sont présentés ou interagis avec l'utilisateur.