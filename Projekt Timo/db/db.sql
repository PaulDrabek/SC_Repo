"Benutzertabelle"
create table benutzer (
    id BIGSERIAL NOT NULL PRIMARY KEY,
    benutzername VARCHAR(20) NOT NULL UNIQUE,
    kennwort VARCHAR(100) NOT NULL,
    benutzertyp VARCHAR(50) NOT NULL check(benutzertyp = 'Besitzer'  OR 
    benutzertyp = 'Handwerker' OR benutzertyp = 'Monteur' OR benutzertyp = 'Produktionsmitarbeiter' )   
);

-- Änderung für den Benutzer "Admin" 15.11.2022
    ALTER TABLE benutzer DROP CONSTRAINT benutzer_benutzertyp_check;
    ALTER TABLE benutzer ADD CHECK (benutzertyp = 'Besitzer'  OR 
    benutzertyp = 'Handwerker' OR benutzertyp = 'Monteur' OR benutzertyp = 'Produktionsmitarbeiter' 
        OR benutzertyp = 'Produktionsmitarbeiter' OR benutzertyp = 'Admin');
    -- Check für Neue Admin
    
    -- Änderung sodass Name, Nachname, Kontakt, Adresse and gesperrt zum Benutzer hinzugefügt werden
    ALTER TABLE benutzer ADD gesperrt BOOLEAN DEFAULT FALSE
    ALTER TABLE benutzer ADD Name VARCHAR(20) NOT NULL DEFAULT 'Name'
    ALTER TABLE benutzer ADD Nachname VARCHAR(20) NOT NULL DEFAULT 'Nachname'
    ALTER TABLE benutzer ADD Kontakt VARCHAR(20) NOT NULL DEFAULT '00000000'
    ALTER TABLE benutzer ADD Adresse VARCHAR(100) NOT NULL DEFAULT 'Muster Adresse' 

insert into benutzer (benutzername, kennwort, benutzertyp) values ('Kyle','1234!','Handwerker');

insert into benutzer (benutzername, kennwort, benutzertyp) values ('Nicolas','1234!','Handwerker');

insert into benutzer (benutzername, kennwort, benutzertyp) values ('Hannah','1234!','Monteur');

insert into benutzer (benutzername, kennwort, benutzertyp) values ('Jakim','1234!','Produktionsmitarbeiter');

"Baugruppentabelle"
create table baugruppen (
    id BIGSERIAL NOT NULL PRIMARY KEY,
    baugruppe_name VARCHAR(50) NOT NULL,
    baugruppe_beschreibung TEXT NOT NULL,
    baugruppe_bild TEXT NOT NULL 
);

insert into baugruppen (baugruppe_name, baugruppe_beschreibung, baugruppe_bild) values ('Aufbau','Betrieb','Link');
insert into baugruppen (baugruppe_name, baugruppe_beschreibung, baugruppe_bild) values ('Innenausbau','Betrieb','Link');
insert into baugruppen (baugruppe_name, baugruppe_beschreibung, baugruppe_bild) values ('Stromversorgung','Betrieb','Link');
insert into baugruppen (baugruppe_name, baugruppe_beschreibung, baugruppe_bild) values ('Wasserversorgung','Betrieb','Link');
insert into baugruppen (baugruppe_name, baugruppe_beschreibung, baugruppe_bild) values ('Sanitäranlagen','Betrieb','Link');
insert into baugruppen (baugruppe_name, baugruppe_beschreibung, baugruppe_bild) values ('Heizung','Betrieb','Link');
insert into baugruppen (baugruppe_name, baugruppe_beschreibung, baugruppe_bild) values ('Lüftung','Betrieb','Link');


"Teilgruppen"

create table teilegruppen(
    id BIGSERIAL NOT NULL PRIMARY KEY,
    teilegruppe_name VARCHAR(50) NOT NULL,
    teilegruppe_beschreibung TEXT NOT NULL,
    teilegruppe_bild TEXT NOT NULL,
    baugruppe_id BIGINT NOT NULL REFERENCES baugruppen(id) 
);

insert into teilegruppen (teilegruppe_name, teilegruppe_beschreibung, teilegruppe_bild, baugruppe_id) values ('Außenwände','Dummy','Link', 1);
insert into teilegruppen (teilegruppe_name, teilegruppe_beschreibung, teilegruppe_bild, baugruppe_id) values ('Innenwände','Dummy','Link', 1);
insert into teilegruppen (teilegruppe_name, teilegruppe_beschreibung, teilegruppe_bild, baugruppe_id) values ('Fußboden','Dummy','Link', 1);
insert into teilegruppen (teilegruppe_name, teilegruppe_beschreibung, teilegruppe_bild, baugruppe_id) values ('Dach','Dummy','Link', 1);
insert into teilegruppen (teilegruppe_name, teilegruppe_beschreibung, teilegruppe_bild, baugruppe_id) values ('Fenster','Dummy','Link', 1);
insert into teilegruppen (teilegruppe_name, teilegruppe_beschreibung, teilegruppe_bild, baugruppe_id) values ('Tueren','Dummy','Link', 1);

"Bauteile"

create table bauteile(
    id BIGSERIAL NOT NULL PRIMARY KEY,
    bauteil_name VARCHAR(50) NOT NULL,
    bauteil_beschreibung TEXT NOT NULL,
    bauteil_bild TEXT NOT NULL,
    teilegruppe_id BIGINT NOT NULL REFERENCES teilegruppen(id) 
);

insert into bauteile (bauteil_name, bauteil_beschreibung, bauteil_bild, teilegruppe_id) values ('Tuer1','Holz-Haustuer 100 cm x 201 cm Anschlag Links','/images/Tuer1Bild.png', 6);
insert into bauteile (bauteil_name, bauteil_beschreibung, bauteil_bild, teilegruppe_id) values ('Tuer2','Dummy','Link', 6);
insert into bauteile (bauteil_name, bauteil_beschreibung, bauteil_bild, teilegruppe_id) values ('Tuer3','Dummy','Link', 6);
insert into bauteile (bauteil_name, bauteil_beschreibung, bauteil_bild, teilegruppe_id) values ('Tuer4','Dummy','Link', 6);


insert into bauteile (bauteil_name, bauteil_beschreibung, bauteil_bild, teilegruppe_id) values ('Fenster1','Holz-Fenster 200 cm x 40 cm','/images/Fenster1Bild.png', 5);
insert into bauteile (bauteil_name, bauteil_beschreibung, bauteil_bild, teilegruppe_id) values ('Fenster2','Holz-Fenster 250 cm x 200 cm','/images/Fenster1Bild.png', 5);
insert into bauteile (bauteil_name, bauteil_beschreibung, bauteil_bild, teilegruppe_id) values ('Fenster3','Dummy','Link', 5);
insert into bauteile (bauteil_name, bauteil_beschreibung, bauteil_bild, teilegruppe_id) values ('Fenster4','Dummy','Link', 5);

insert into bauteile (bauteil_name, bauteil_beschreibung, bauteil_bild, teilegruppe_id) values ('Dach1','Dummy','Link', 4);
insert into bauteile (bauteil_name, bauteil_beschreibung, bauteil_bild, teilegruppe_id) values ('Dach2','Dummy','Link', 4);
insert into bauteile (bauteil_name, bauteil_beschreibung, bauteil_bild, teilegruppe_id) values ('Dach3','Dummy','Link', 4);
insert into bauteile (bauteil_name, bauteil_beschreibung, bauteil_bild, teilegruppe_id) values ('Dach4','Dummy','Link', 4);

insert into bauteile (bauteil_name, bauteil_beschreibung, bauteil_bild, teilegruppe_id) values ('Fußboden1','Dummy','Link', 3);
insert into bauteile (bauteil_name, bauteil_beschreibung, bauteil_bild, teilegruppe_id) values ('Fußboden2','Dummy','Link', 3);
insert into bauteile (bauteil_name, bauteil_beschreibung, bauteil_bild, teilegruppe_id) values ('Fußboden3','Dummy','Link', 3);
insert into bauteile (bauteil_name, bauteil_beschreibung, bauteil_bild, teilegruppe_id) values ('Fußboden4','Dummy','Link', 3);

insert into bauteile (bauteil_name, bauteil_beschreibung, bauteil_bild, teilegruppe_id) values ('Innenwand1','Dummy','Link', 2);
insert into bauteile (bauteil_name, bauteil_beschreibung, bauteil_bild, teilegruppe_id) values ('Innenwand2','Dummy','Link', 2);
insert into bauteile (bauteil_name, bauteil_beschreibung, bauteil_bild, teilegruppe_id) values ('Innenwand3','Dummy','Link', 2);
insert into bauteile (bauteil_name, bauteil_beschreibung, bauteil_bild, teilegruppe_id) values ('Innenwand4','Dummy','Link', 2);

insert into bauteile (bauteil_name, bauteil_beschreibung, bauteil_bild, teilegruppe_id) values ('Außenwand1','Dummy','Link', 1);
insert into bauteile (bauteil_name, bauteil_beschreibung, bauteil_bild, teilegruppe_id) values ('Außenwand2','Dummy','Link', 1);
insert into bauteile (bauteil_name, bauteil_beschreibung, bauteil_bild, teilegruppe_id) values ('Außenwand3','Dummy','Link', 1);
insert into bauteile (bauteil_name, bauteil_beschreibung, bauteil_bild, teilegruppe_id) values ('Außenwand4','Dummy','Link', 1);


"Teile"

create table einzelteile(
    id BIGSERIAL NOT NULL PRIMARY KEY,
    einzelteil_nummer VARCHAR(20) NOT NULL,
    einzelteil_name VARCHAR(50) NOT NULL,
    einzelteil_herstellungsdatum DATE NOT NULL,
    einzelteil_beschreibung TEXT NOT NULL,
    einzelteil_bild TEXT NOT NULL,
    bauteil_id BIGINT NOT NULL REFERENCES bauteile(id) 
);

insert into einzelteile (einzelteil_nummer,einzelteil_name, einzelteil_herstellungsdatum,einzelteil_beschreibung, einzelteil_bild, bauteil_id) 
values ('1.6.001.001','Zarge','2022-05-28','Dummy','Link', 1);
insert into einzelteile (einzelteil_nummer,einzelteil_name, einzelteil_herstellungsdatum,einzelteil_beschreibung, einzelteil_bild, bauteil_id) 
values ('1.6.001.002','Türblatt','2022-05-28','Dummy','Link', 1);
insert into einzelteile (einzelteil_nummer,einzelteil_name, einzelteil_herstellungsdatum,einzelteil_beschreibung, einzelteil_bild, bauteil_id) 
values ('1.6.001.003','Drückergarnitur','2022-05-28','Dummy','Link', 1);
insert into einzelteile (einzelteil_nummer,einzelteil_name, einzelteil_herstellungsdatum,einzelteil_beschreibung, einzelteil_bild, bauteil_id) 
values ('1.6.001.004','Schlosskasten','2022-05-28','Dummy','Link', 1);
insert into einzelteile (einzelteil_nummer,einzelteil_name, einzelteil_herstellungsdatum,einzelteil_beschreibung, einzelteil_bild, bauteil_id) 
values ('1.6.001.005','Schließblech','2022-05-28','Dummy','Link', 1);
insert into einzelteile (einzelteil_nummer,einzelteil_name, einzelteil_herstellungsdatum,einzelteil_beschreibung, einzelteil_bild, bauteil_id) 
values ('1.6.001.006','Türband','2022-05-28','Dummy','Link', 1);
insert into einzelteile (einzelteil_nummer,einzelteil_name, einzelteil_herstellungsdatum,einzelteil_beschreibung, einzelteil_bild, bauteil_id) 
values ('1.6.001.007','Schlossrosette','2022-05-28','Dummy','Link', 1);

"Aufgaben"

create table aufgaben(
    id BIGSERIAL NOT NULL PRIMARY KEY,
    aufgabe_typ VARCHAR(20) NOT NULL check(aufgabe_typ = 'Planung'  OR 
    aufgabe_typ = 'Produktion' OR aufgabe_typ = 'Montage' OR aufgabe_typ = 'Betrieb' 
    OR aufgabe_typ = 'Modernisierung' OR aufgabe_typ = 'Demontage' OR aufgabe_typ = 'Umzug'
    OR aufgabe_typ = 'Re-/Upcycling'),
    aufgabe_beschreibung TEXT NOT NULL,
    aufgabe_abschlussdatum DATE,
    aufgabe_timestamp_start TIMESTAMP,
    aufgabe_timestamp_end TIMESTAMP,
    aufgabe_dauer INTERVAL,
    benutzer_id BIGINT NOT NULL REFERENCES benutzer(id),
    bauteil_id  BIGINT NOT NULL REFERENCES bauteile(id)
);

insert into aufgaben (aufgabe_typ, aufgabe_beschreibung, aufgabe_abschlussdatum,aufgabe_timestamp_start,aufgabe_timestamp_end, aufgabe_dauer, benutzer_id, bauteil_id) 
values ('Produktion','Bauteil ist fertiggestellt','2022-05-27', '2022-05-27 08:01:00', '2022-05-27 22:08:00', AGE('2022-05-27 22:08:00','2022-05-27 08:01:00') ,8, 1);

################################################################

insert into aufgaben (aufgabe_typ, aufgabe_beschreibung, aufgabe_abschlussdatum,aufgabe_timestamp_start,aufgabe_timestamp_end, aufgabe_dauer, benutzer_id, bauteil_id) 
values ('Produktion','Bauteil ist verpackt','2022-05-28', '2022-05-28 07:35:30', '2022-05-28 08:40:20', AGE('2022-05-28 08:40:20','2022-05-28 07:35:30') ,8, 1);

insert into aufgaben (aufgabe_typ, aufgabe_beschreibung, aufgabe_abschlussdatum,aufgabe_timestamp_start,aufgabe_timestamp_end, aufgabe_dauer, benutzer_id, bauteil_id) 
values ('Produktion','Bauteil ist zur Montage überliefert','2022-05-28', '2022-05-28 09:00:30', '2022-05-28 10:02:20', AGE('2022-05-28 10:02:20','2022-05-28 09:00:30') ,8, 1);




insert into aufgaben (aufgabe_typ, aufgabe_beschreibung, aufgabe_abschlussdatum,aufgabe_timestamp_start,aufgabe_timestamp_end, aufgabe_dauer, benutzer_id, bauteil_id)
values ('Montage','Bauteil ist montiert','2022-05-28','2022-05-28 10:34:50', '2022-05-28 12:08:00', AGE('2022-05-28 12:08:00','2022-05-28 10:34:50'), 7, 1);


Tür2
insert into aufgaben (aufgabe_typ, aufgabe_beschreibung, aufgabe_abschlussdatum,aufgabe_timestamp_start,aufgabe_timestamp_end, aufgabe_dauer, benutzer_id, bauteil_id)
values ('Produktion','Bauteil ist fertiggestellt','2022-05-28','2022-05-28 10:45:00', '2022-05-28 21:45:20', AGE('2022-05-28 21:45:20','2022-05-28 10:45:00'), 8, 2);


