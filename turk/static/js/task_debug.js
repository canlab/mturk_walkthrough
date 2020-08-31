// initialize your instance of psiturk
var psiturk = new PsiTurk(uniqueId, adServerLoc, mode);

var timeline=[];
var vid_stim=[];
var audio_stim=[];
var video = [
    'https://spacetopvids.s3.us-east-2.amazonaws.com/vids/scan_1_ANGRY_GRANDPAS_DREAM_CAR_CUT.mp4',
    'https://spacetopvids.s3.us-east-2.amazonaws.com/vids/scan_1_Best_Friends_Wedding_CUT.mp4',
    'https://spacetopvids.s3.us-east-2.amazonaws.com/vids/scan_1_Daichi_for_Beatbox_Battle_Wildcard_CUT.mp4',
    'https://spacetopvids.s3.us-east-2.amazonaws.com/vids/scan_1_Fastest_Cup_Stacker _Sets _New_World_Record_CUT.mp4',
    'https://spacetopvids.s3.us-east-2.amazonaws.com/vids/scan_1_HB_CUT.mp4-00.00.00.000-00.00.57.000.mp4',
    'https://spacetopvids.s3.us-east-2.amazonaws.com/vids/scan_1_Hugging_Pets.mp4-00.00.00.000-00.01.46.472_CUT.mp4',
    'https://spacetopvids.s3.us-east-2.amazonaws.com/vids/scan_1_Idiot_with_a_Tripod_CUT.mp4-00.00.14.539-00.03.26.616.mp4-00.02.14.000-00.03.03.948.mp4',
    'https://spacetopvids.s3.us-east-2.amazonaws.com/vids/scan_1_Wanderers_CUT.mp4-00.00.00.000-00.03.18.014.mp4',
    'https://spacetopvids.s3.us-east-2.amazonaws.com/vids/scan_1_When_Harry_Met_Sally_CUT.avi',
    'https://spacetopvids.s3.us-east-2.amazonaws.com/vids/scan_1_beach_sunset_1080p00.00.00.000-00.02.00.000.mp4-00.00.00.000-00.00.30.039_CUT.mp4',
    'https://spacetopvids.s3.us-east-2.amazonaws.com/vids/scan_1_lion_cubs_meet_dad.mp4-00.00.00.000-00.01.00.765.mp4',
    'https://spacetopvids.s3.us-east-2.amazonaws.com/vids/scan_1_the_night_i_dance_with_death_CUT.mp4-00.03.12.948-00.05.26.002.mp4',
    'https://spacetopvids.s3.us-east-2.amazonaws.com/vids/scan_1_the_worlds_best_parkour_and_freerunning.mp4-00.00.43.599-00.01.21.511.mp4',
    'https://spacetopvids.s3.us-east-2.amazonaws.com/vids/scan_1_vid3_homogeneity_2.mp4'];

timeline.push({
    type: 'fullscreen',
    fullscreen_mode:true
});

var welcome = {
    type: 'html-keyboard-response',
    stimulus: '',
    choices: jsPsych.ALL_KEYS,
    prompt: "<p>Welcome to the experiment, press any key to begin</p>"
};

timeline.push(welcome);

var test_instructions = {
    // debug your own instructions
    type:'',
    stimulus: '',
    choices: ''
}
// push your variable to the timeline
timeline.push()

var audio_test = {
    timeline:[
        {
            type:'audio-keyboard-response',
            stimulus: function(){
                var audio_file = jsPsych.randomization.sampleWithReplacement(audio,1);
                audio_stim.push(audio_file);
                return audio_file
            },
            choices: jsPsych.NO_KEYS,
            trial_ends_after_audio:true
        },
        {
            type:'html-button-response',
            stimulus:'What number did the person say in the previous audio clip?',
            choices: ['0','1','2','3','4','5','6','7','8','9'],
        }
    ]
}

var audio_test_sequence = {
    timeline: [audio_test],
    repetitions: 10,
    loop_function: function(){
        var button_data = jsPsych.data.get().last(10).select("button_pressed").values;
        var audio_data = jsPsych.data.get().last(10).select("stimulus").values;
        audio_data = audio_data.filter(function(str){
            if(Array.isArray(str)){
                return str
            } else{

            }
        })
        var num_said = []
        for(var i = 0; i< audio_data.length; i++){
            var str = audio_data[i]
            str = str[0]
            var num = str.substring(54,55)
            num_said.push(num)}
            if(JSON.stringify(num_said) === JSON.stringify(button_data)){
                return false
            } else{
                return true
            }
        }
}
timeline.push(audio_test_sequence)


var instructions = {
    type: 'html-keyboard-response',
    stimulus: '<h1>INSTRUCTIONS</h1>'+
              '<h2>Thank you for participating in our experiment!</h2>'+
              '<p>In this experiment, you will be asked to give ratings on how a video made you feel. '+
              'Please pay attention for the duration of the video, and do you best to give an honest rating when prompted to make your ratings after the video is over. '+
              '<strong>PLEASE TURN YOUR AUDIO ON NOW</strong> it is very important you hear the video as well.</p>'+
              '<p>Please press the space bar to continue to the practice trial.</p>',
    choices:' '
}

timeline.push(instructions);


var practice_trial = {
    timeline:[
    {
        // write your own stimuli here, i.e. instructions
        type: '',
        stimulus: '',
        choices: ''
    },
    {
        // fixation before viewing stim
        type: 'html-keyboard-response',
        stimulus: '+',
        choices: jsPsych.NO_KEYS,
        trial_duration:1000,
    },
    {
        type: 'video-keyboard-response',
        sources: function(){
            vid_stim=[];
            var vid = jsPsych.randomization.sampleWithoutReplacement(video, 1);
            vid_stim.push(vid);
            return vid},
        trial_ends_after_video: true,
        choices: jsPsych.NO_KEYS,
        autoplay:true,
        width: 900,
        height:900,
        data:{
            video: function(){
                var string = vid_stim[0]
                return string
            },
            phase: 'response'
        }
    },
    // now let's ask for some ratings
    {
        type: 'html-slider-response',
        // specify your question
        stimulus: '',
        // and labels
        labels: [],
        //randomly choose a starting value
        start: function(){
            return Math.floor(Math.random() * 100)
        },
        // choose your range
        min: 0,
        max: 100,
        step: 1,
        require_movement: true,
        data: {phase: 'response'}

    },
    {
        type: 'html-slider-response',
        stimulus: ' ',
        labels: [],
        min: 0,
        max: 100,
        step: 1,
        // change 1 to randomlly generated #
        start:1,
        require_movement: true,
        data: {phase: 'response'}

    },
]
};

// push to timeline!! 

var final_instruction = {
    // tell the participant they are advancing to the real deal, same type used for instructions
    type: '',
    stimulus: '',
    choices:' '
};

timeline.push(final_instruction)

var SpaceTop = {
    timeline:[
        // write out the same procedure as the practice trial! 
    ]
}


var SpaceTop_sequence = {
    timeline: [],// what variable do we want to act as our timeline?,
    repetitions:1 // how many times do we want it repeated?
    }

timeline.push(SpaceTop_sequence)

/*
 record uniqueId, condition, and counterbalance in every trial.
 these variables are populated by psiturk server
*/
jsPsych.data.addProperties({
    uniqueId: uniqueId
});


jsPsych.init({
    timeline: timeline,
    preload_audio: audio,
    /* record data to locally to psiturk javascript object after each trial */
    on_data_update: function(data) {
        psiturk.recordTrialData(data);
    },
    /* called at end of experiment */
    on_finish: function() {
        /* save data to database */
        psiturk.saveData({
            success: function() {
                    psiturk.completeHIT();
        }});
    }
});



