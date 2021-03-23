import React, {useState} from 'react'
import { View, ScrollView, Text, Image, StyleSheet } from 'react-native'

const CompanySummary = ({ logo, name, summary }) =>
    <View style={styles.summaryContainer}>
        <View style={styles.logoContainer}>
            <Image source={logo} style={styles.logo} />
        </View>
        <View>
            <Text style={styles.companyName}>{name}</Text>
            <Text>{summary}</Text>
        </View>
    </View>

const QuickInfo = ({ location, level, year }) =>
    <View>
        <Text style={styles.quickInfoText}>{location}</Text>
        <Text style={styles.quickInfoText}>{level + ", " + year}</Text>
    </View>

const Tag = ({ tag }) =>
    <View style={styles.tagBubble}>
        <Text style={styles.tagText}>{tag}</Text>
    </View>

const TagCloud = ({ tags }) =>
    <View style={styles.tagContainer}>
        {tags.map(text => <Tag tag={text} key={text}/>)}
    </View>

const DetailParagraph = ({ title, content }) =>
    <View>
        <Text style={styles.sectionTitle}>{title}</Text>
        <Text style={{ marginBottom: 10 }}>{content}</Text>
    </View>

const SizeStat = ({ range }) =>
    <View>
        <Text style={styles.sectionTitle}>Size</Text>
        <Text>{range + "+ Employees"}</Text>
    </View>

const MatchRateStat = ({ rate }) =>
    <View>
        <Text style={styles.sectionTitle}>Match Rate</Text>
        <Text>{rate + "%"}</Text>
    </View>

const OtherInternships = ({ name, otherInternships }) =>
    <View>
        <Text style={styles.sectionTitle}>{"Other Internships at " + name}</Text>
        <View style={styles.dividerLine} />
        {otherInternships.map(title =>
            <View key={title}>
                <Text>{title}</Text>
                <View style={styles.dividerLine} />
            </View>
        )
        }
    </View>

export default JobCard = ({ content }) =>
    <ScrollView style={{...styles.card, backgroundColor: content.matched ? '#9EFFCB' : 'white'}}>
    <Text style={styles.title}>{content.title}</Text>
    <CompanySummary
        logo={content.logo}
        name={content.name}
        summary={content.summary} />
    <QuickInfo
        location={content.location}
        level={content.level}
        year={content.year} />
    <TagCloud tags={content.tags} />
    <View style={styles.dividerLine} />
    <DetailParagraph
        title="Basic Qualifications"
        content={content.qualifications} />
    <DetailParagraph
        title="Position Description"
        content={content.positionDescription} />
    <DetailParagraph
        title={"About " + content.name}
        content={content.about} />
    <SizeStat range={content.sizeRange} />
    <MatchRateStat rate={content.matchRate} />
    <OtherInternships
        name={content.name}
        otherInternships={content.otherInternships} />
    </ScrollView>

const styles = StyleSheet.create({
    title: {
        fontSize: 30,
        fontWeight: "700",
        marginBottom: 15
    },

    companyName: {
        fontSize: 20,
        fontWeight: 'bold'
    },


    logoContainer: {
        flex: 1,
        aspectRatio: 1,
    },

    logo: {
        width: '100%',
        height: "100%"
    },

    summaryContainer: {
        flexDirection: 'row'
    },

    card: {
        width: '90%',
        paddingHorizontal: '10%',
        borderRadius: 20,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.2,
        shadowRadius: 5,
        elevation: 5
    },

    quickInfoText: {
        marginVertical: 10
    },

    tagBubble: {
        backgroundColor: '#FFC997',
        borderRadius: 20,
        alignSelf: 'flex-start',
        padding: 12,
        margin: 5,
        minWidth: '20%'
    },

    tagContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
    },

    tagText: {
        textAlign: 'center'
    },

    dividerLine: {
        borderBottomColor: '#DADADA',
        borderBottomWidth: 2,
        marginVertical: 10
    },

    sectionTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginVertical: 7
    }
})