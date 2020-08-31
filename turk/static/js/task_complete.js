// initialize instance of psiturk
var psiturk = new PsiTurk(uniqueId, adServerLoc, mode);
//
var timeline=[];
var vid_stim=[];
var audio_stim=[];
var trial_stim =[];
var audio=[
'https://spacetopvids.s3.us-east-2.amazonaws.com/audio/0_theo_0.wav',
'https://spacetopvids.s3.us-east-2.amazonaws.com/audio/0_theo_1.wav',
'https://spacetopvids.s3.us-east-2.amazonaws.com/audio/0_theo_2.wav',
'https://spacetopvids.s3.us-east-2.amazonaws.com/audio/0_theo_3.wav',
'https://spacetopvids.s3.us-east-2.amazonaws.com/audio/0_theo_4.wav',
'https://spacetopvids.s3.us-east-2.amazonaws.com/audio/0_theo_5.wav',
'https://spacetopvids.s3.us-east-2.amazonaws.com/audio/0_theo_6.wav',
'https://spacetopvids.s3.us-east-2.amazonaws.com/audio/0_theo_7.wav',
'https://spacetopvids.s3.us-east-2.amazonaws.com/audio/0_theo_8.wav',
'https://spacetopvids.s3.us-east-2.amazonaws.com/audio/0_theo_9.wav',
'https://spacetopvids.s3.us-east-2.amazonaws.com/audio/1_jackson_0.wav',
'https://spacetopvids.s3.us-east-2.amazonaws.com/audio/1_jackson_1.wav',
'https://spacetopvids.s3.us-east-2.amazonaws.com/audio/1_jackson_10.wav',
'https://spacetopvids.s3.us-east-2.amazonaws.com/audio/1_jackson_11.wav',
'https://spacetopvids.s3.us-east-2.amazonaws.com/audio/1_jackson_12.wav',
'https://spacetopvids.s3.us-east-2.amazonaws.com/audio/1_jackson_13.wav',
'https://spacetopvids.s3.us-east-2.amazonaws.com/audio/1_jackson_14.wav',
'https://spacetopvids.s3.us-east-2.amazonaws.com/audio/1_jackson_15.wav',
'https://spacetopvids.s3.us-east-2.amazonaws.com/audio/1_jackson_16.wav',
'https://spacetopvids.s3.us-east-2.amazonaws.com/audio/1_jackson_17.wav',
'https://spacetopvids.s3.us-east-2.amazonaws.com/audio/1_jackson_18.wav',
'https://spacetopvids.s3.us-east-2.amazonaws.com/audio/1_jackson_19.wav',
'https://spacetopvids.s3.us-east-2.amazonaws.com/audio/1_jackson_2.wav',
'https://spacetopvids.s3.us-east-2.amazonaws.com/audio/1_jackson_20.wav',
'https://spacetopvids.s3.us-east-2.amazonaws.com/audio/1_jackson_21.wav',
'https://spacetopvids.s3.us-east-2.amazonaws.com/audio/2_theo_0.wav',
'https://spacetopvids.s3.us-east-2.amazonaws.com/audio/2_theo_1.wav',
'https://spacetopvids.s3.us-east-2.amazonaws.com/audio/2_theo_10.wav',
'https://spacetopvids.s3.us-east-2.amazonaws.com/audio/2_theo_11.wav',
'https://spacetopvids.s3.us-east-2.amazonaws.com/audio/2_theo_12.wav',
'https://spacetopvids.s3.us-east-2.amazonaws.com/audio/2_theo_13.wav',
'https://spacetopvids.s3.us-east-2.amazonaws.com/audio/2_theo_14.wav',
'https://spacetopvids.s3.us-east-2.amazonaws.com/audio/2_theo_15.wav',
'https://spacetopvids.s3.us-east-2.amazonaws.com/audio/2_theo_16.wav',
'https://spacetopvids.s3.us-east-2.amazonaws.com/audio/2_theo_17.wav',
'https://spacetopvids.s3.us-east-2.amazonaws.com/audio/2_theo_18.wav',
'https://spacetopvids.s3.us-east-2.amazonaws.com/audio/2_theo_19.wav',
'https://spacetopvids.s3.us-east-2.amazonaws.com/audio/2_theo_2.wav',
'https://spacetopvids.s3.us-east-2.amazonaws.com/audio/2_theo_20.wav',
'https://spacetopvids.s3.us-east-2.amazonaws.com/audio/2_theo_21.wav',
'https://spacetopvids.s3.us-east-2.amazonaws.com/audio/3_jackson_0.wav',
'https://spacetopvids.s3.us-east-2.amazonaws.com/audio/3_jackson_1.wav',
'https://spacetopvids.s3.us-east-2.amazonaws.com/audio/3_jackson_10.wav',
'https://spacetopvids.s3.us-east-2.amazonaws.com/audio/3_jackson_11.wav',
'https://spacetopvids.s3.us-east-2.amazonaws.com/audio/3_jackson_12.wav',
'https://spacetopvids.s3.us-east-2.amazonaws.com/audio/3_jackson_13.wav',
'https://spacetopvids.s3.us-east-2.amazonaws.com/audio/3_jackson_14.wav',
'https://spacetopvids.s3.us-east-2.amazonaws.com/audio/3_jackson_15.wav',
'https://spacetopvids.s3.us-east-2.amazonaws.com/audio/3_jackson_16.wav',
'https://spacetopvids.s3.us-east-2.amazonaws.com/audio/3_jackson_17.wav',
'https://spacetopvids.s3.us-east-2.amazonaws.com/audio/3_jackson_18.wav',
'https://spacetopvids.s3.us-east-2.amazonaws.com/audio/3_jackson_19.wav',
'https://spacetopvids.s3.us-east-2.amazonaws.com/audio/3_jackson_2.wav',
'https://spacetopvids.s3.us-east-2.amazonaws.com/audio/3_jackson_20.wav',
'https://spacetopvids.s3.us-east-2.amazonaws.com/audio/3_jackson_21.wav',
'https://spacetopvids.s3.us-east-2.amazonaws.com/audio/4_theo_0.wav',
'https://spacetopvids.s3.us-east-2.amazonaws.com/audio/4_theo_1.wav',
'https://spacetopvids.s3.us-east-2.amazonaws.com/audio/4_theo_10.wav',
'https://spacetopvids.s3.us-east-2.amazonaws.com/audio/4_theo_11.wav',
'https://spacetopvids.s3.us-east-2.amazonaws.com/audio/4_theo_12.wav',
'https://spacetopvids.s3.us-east-2.amazonaws.com/audio/4_theo_13.wav',
'https://spacetopvids.s3.us-east-2.amazonaws.com/audio/4_theo_14.wav',
'https://spacetopvids.s3.us-east-2.amazonaws.com/audio/4_theo_15.wav',
'https://spacetopvids.s3.us-east-2.amazonaws.com/audio/4_theo_16.wav',
'https://spacetopvids.s3.us-east-2.amazonaws.com/audio/4_theo_17.wav',
'https://spacetopvids.s3.us-east-2.amazonaws.com/audio/4_theo_18.wav',
'https://spacetopvids.s3.us-east-2.amazonaws.com/audio/4_theo_19.wav',
'https://spacetopvids.s3.us-east-2.amazonaws.com/audio/4_theo_2.wav',
'https://spacetopvids.s3.us-east-2.amazonaws.com/audio/4_theo_20.wav',
'https://spacetopvids.s3.us-east-2.amazonaws.com/audio/4_theo_21.wav',
'https://spacetopvids.s3.us-east-2.amazonaws.com/audio/5_jackson_0.wav',
'https://spacetopvids.s3.us-east-2.amazonaws.com/audio/5_jackson_1.wav',
'https://spacetopvids.s3.us-east-2.amazonaws.com/audio/5_jackson_10.wav',
'https://spacetopvids.s3.us-east-2.amazonaws.com/audio/5_jackson_11.wav',
'https://spacetopvids.s3.us-east-2.amazonaws.com/audio/5_jackson_12.wav',
'https://spacetopvids.s3.us-east-2.amazonaws.com/audio/5_jackson_13.wav',
'https://spacetopvids.s3.us-east-2.amazonaws.com/audio/5_jackson_14.wav',
'https://spacetopvids.s3.us-east-2.amazonaws.com/audio/5_jackson_15.wav',
'https://spacetopvids.s3.us-east-2.amazonaws.com/audio/5_jackson_16.wav',
'https://spacetopvids.s3.us-east-2.amazonaws.com/audio/5_jackson_17.wav',
'https://spacetopvids.s3.us-east-2.amazonaws.com/audio/5_jackson_18.wav',
'https://spacetopvids.s3.us-east-2.amazonaws.com/audio/5_jackson_19.wav',
'https://spacetopvids.s3.us-east-2.amazonaws.com/audio/5_jackson_2.wav',
'https://spacetopvids.s3.us-east-2.amazonaws.com/audio/5_jackson_20.wav',
'https://spacetopvids.s3.us-east-2.amazonaws.com/audio/5_jackson_21.wav',
'https://spacetopvids.s3.us-east-2.amazonaws.com/audio/6_theo_0.wav',
'https://spacetopvids.s3.us-east-2.amazonaws.com/audio/6_theo_1.wav',
'https://spacetopvids.s3.us-east-2.amazonaws.com/audio/6_theo_10.wav',
'https://spacetopvids.s3.us-east-2.amazonaws.com/audio/6_theo_11.wav',
'https://spacetopvids.s3.us-east-2.amazonaws.com/audio/6_theo_12.wav',
'https://spacetopvids.s3.us-east-2.amazonaws.com/audio/6_theo_13.wav',
'https://spacetopvids.s3.us-east-2.amazonaws.com/audio/6_theo_14.wav',
'https://spacetopvids.s3.us-east-2.amazonaws.com/audio/6_theo_15.wav',
'https://spacetopvids.s3.us-east-2.amazonaws.com/audio/6_theo_16.wav',
'https://spacetopvids.s3.us-east-2.amazonaws.com/audio/6_theo_17.wav',
'https://spacetopvids.s3.us-east-2.amazonaws.com/audio/6_theo_18.wav',
'https://spacetopvids.s3.us-east-2.amazonaws.com/audio/6_theo_19.wav',
'https://spacetopvids.s3.us-east-2.amazonaws.com/audio/6_theo_2.wav',
'https://spacetopvids.s3.us-east-2.amazonaws.com/audio/6_theo_20.wav',
'https://spacetopvids.s3.us-east-2.amazonaws.com/audio/6_theo_21.wav',
'https://spacetopvids.s3.us-east-2.amazonaws.com/audio/7_jackson_0.wav',
'https://spacetopvids.s3.us-east-2.amazonaws.com/audio/7_jackson_1.wav',
'https://spacetopvids.s3.us-east-2.amazonaws.com/audio/7_jackson_10.wav',
'https://spacetopvids.s3.us-east-2.amazonaws.com/audio/7_jackson_11.wav',
'https://spacetopvids.s3.us-east-2.amazonaws.com/audio/7_jackson_12.wav',
'https://spacetopvids.s3.us-east-2.amazonaws.com/audio/7_jackson_13.wav',
'https://spacetopvids.s3.us-east-2.amazonaws.com/audio/7_jackson_14.wav',
'https://spacetopvids.s3.us-east-2.amazonaws.com/audio/7_jackson_15.wav',
'https://spacetopvids.s3.us-east-2.amazonaws.com/audio/7_jackson_16.wav',
'https://spacetopvids.s3.us-east-2.amazonaws.com/audio/7_jackson_17.wav',
'https://spacetopvids.s3.us-east-2.amazonaws.com/audio/7_jackson_18.wav',
'https://spacetopvids.s3.us-east-2.amazonaws.com/audio/7_jackson_19.wav',
'https://spacetopvids.s3.us-east-2.amazonaws.com/audio/7_jackson_2.wav',
'https://spacetopvids.s3.us-east-2.amazonaws.com/audio/7_jackson_20.wav',
'https://spacetopvids.s3.us-east-2.amazonaws.com/audio/7_jackson_21.wav',
'https://spacetopvids.s3.us-east-2.amazonaws.com/audio/8_theo_0.wav',
'https://spacetopvids.s3.us-east-2.amazonaws.com/audio/8_theo_1.wav',
'https://spacetopvids.s3.us-east-2.amazonaws.com/audio/8_theo_10.wav',
'https://spacetopvids.s3.us-east-2.amazonaws.com/audio/8_theo_11.wav',
'https://spacetopvids.s3.us-east-2.amazonaws.com/audio/8_theo_12.wav',
'https://spacetopvids.s3.us-east-2.amazonaws.com/audio/8_theo_13.wav',
'https://spacetopvids.s3.us-east-2.amazonaws.com/audio/8_theo_14.wav',
'https://spacetopvids.s3.us-east-2.amazonaws.com/audio/8_theo_15.wav',
'https://spacetopvids.s3.us-east-2.amazonaws.com/audio/8_theo_16.wav',
'https://spacetopvids.s3.us-east-2.amazonaws.com/audio/8_theo_17.wav',
'https://spacetopvids.s3.us-east-2.amazonaws.com/audio/8_theo_18.wav',
'https://spacetopvids.s3.us-east-2.amazonaws.com/audio/8_theo_19.wav',
'https://spacetopvids.s3.us-east-2.amazonaws.com/audio/8_theo_2.wav',
'https://spacetopvids.s3.us-east-2.amazonaws.com/audio/8_theo_20.wav',
'https://spacetopvids.s3.us-east-2.amazonaws.com/audio/8_theo_21.wav',
'https://spacetopvids.s3.us-east-2.amazonaws.com/audio/9_jackson_0.wav',
'https://spacetopvids.s3.us-east-2.amazonaws.com/audio/9_jackson_1.wav',
'https://spacetopvids.s3.us-east-2.amazonaws.com/audio/9_jackson_10.wav',
'https://spacetopvids.s3.us-east-2.amazonaws.com/audio/9_jackson_11.wav',
'https://spacetopvids.s3.us-east-2.amazonaws.com/audio/9_jackson_12.wav',
'https://spacetopvids.s3.us-east-2.amazonaws.com/audio/9_jackson_13.wav',
'https://spacetopvids.s3.us-east-2.amazonaws.com/audio/9_jackson_14.wav',
'https://spacetopvids.s3.us-east-2.amazonaws.com/audio/9_jackson_15.wav',
'https://spacetopvids.s3.us-east-2.amazonaws.com/audio/9_jackson_16.wav',
'https://spacetopvids.s3.us-east-2.amazonaws.com/audio/9_jackson_17.wav',
'https://spacetopvids.s3.us-east-2.amazonaws.com/audio/9_jackson_18.wav',
'https://spacetopvids.s3.us-east-2.amazonaws.com/audio/9_jackson_19.wav',
'https://spacetopvids.s3.us-east-2.amazonaws.com/audio/9_jackson_2.wav',
'https://spacetopvids.s3.us-east-2.amazonaws.com/audio/9_jackson_20.wav',
'https://spacetopvids.s3.us-east-2.amazonaws.com/audio/9_jackson_21.wav'
];
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
    prompt: "<strong>Welcome to the experiment, press any key to begin</strong>"
};

timeline.push(welcome);

var test_instructions = {
    type:'html-keyboard-response',
    stimulus: '<h2>Welcome to the experiment</h2>'+
            '<p>In order to proceed, we need to ensure that your audio is working properly.'+
            'After you continue from this page, an audio file of someone saying a number will be played'+
            'You will then be asked which number the person said in the audio file.</p>'+
            '<p><strong>PLEASE TURN YOUR AUDIO ALL THE WAY UP</strong>'+
            'This will ensure that your audio is working properly and you will be able to perform the experiment well.'+
            'The audio files are short, so please pay attention and be ready to answer the question properly.'+
            'If you do not answer the questions correctly, you will be asked to repeat the audio element until you do so.</p>'+
            '<p><strong>WARNING:</strong>The HIT will not be paid unless you complete this portion of the experiment.'+
            'Thank you for your participation, please press the space bar to begin.',
    choices: ' '
}

timeline.push(test_instructions)

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
        type: 'html-keyboard-response',
        stimulus: '<h1>Welcome to the practice trial!</h1>'+
                  '<p>Once you advance from this page you will watch a video and be asked to rate how you feel. '+
                  '<strong>PLEASE MAKE SURE YOUR AUDIO IS ON</strong> as mentioned earlier it is very important for you to hear the video as well. '+
                  'In the actual experiment, you will be shown more than just one video. '+
                  'Make sure you are relaxed, and ready to pay attention, you got this!'+
                  '<p>Please press the space bar to continue to the practice trial.</p>',
        choices: ' '
    },
    {
        type: 'html-keyboard-response',
        stimulus: '<p style="font-size:60px>+</p>',
        choices: jsPsych.NO_KEYS,
        trial_duration:1000,
    },
    {
        type: 'video-keyboard-response',
        sources: function(){
            trial_stim=[];
            var vid = jsPsych.randomization.sampleWithoutReplacement(video, 1);
            vid_stim.push(vid);
            trial_stim.push(vid)
            return vid},
        trial_ends_after_video: true,
        choices: jsPsych.NO_KEYS,
        autoplay:true,
        width: 900,
        height:900,
        data:{
            video: function(){
                var string = trial_stim[0]
                return string
            },
            phase: 'response'
        }
    },
    {
        type: 'html-slider-response',
        stimulus: '<p>In relation to the previous clip, how do you feel?</p>'+
                  '<p><strong>Personal relevance</strong></p>',
        labels: ['Barely at all', 'Strongest Imaginable'],
        start: function(){
            return Math.floor(Math.random() * 100)
        },
        min: 0,
        max: 100,
        step: 1,
        require_movement: true,
        data: {phase: 'response'}

    },
    {
        type: 'html-slider-response',
        stimulus: '<p>In relation to the previous clip, how do you feel?</p>'+
                  '<p><strong>Happy</strong></p>',
        labels: ['Barely at all', 'Strongest Imaginable'],
        min: 0,
        max: 100,
        step: 1,
        start: function(){
            return Math.floor(Math.random() * 100)
        },
        require_movement: true,
        data: {phase: 'response'}

    },
    {
        type: 'html-slider-response',
        stimulus: '<p>In relation to the previous clip, how do you feel?</p>'+
                  '<p><strong>Sad</strong></p>',
        labels: ['Barely at all', 'Strongest Imaginable'],
        min: 0,
        max: 100,
        step: 1,
        start: function(){
            return Math.floor(Math.random() * 100)
        },
        button_label: null,
        require_movement: true,
        data: {phase: 'response'}


    },
    {
        type: 'html-slider-response',
        stimulus: '<p>In relation to the previous clip, how do you feel?</p>'+
                  '<p><strong>Afraid</strong></p>',
        labels: ['Barely at all', 'Strongest Imaginable'],
        min: 0,
        max: 100,
        step: 1,
        start: function(){
            return Math.floor(Math.random() * 100)
        },
        button_label: null,
        require_movement: true,
        data: {phase: 'response'}


    },
    {
        type: 'html-slider-response',
        stimulus: '<p>In relation to the previous clip, how do you feel?</p>'+
                  '<p><strong>Disgusted</strong></p>',
        labels: ['Barely at all', 'Strongest Imaginable'],
        min: 0,
        max: 100,
        step: 1,
        start: function(){
            return Math.floor(Math.random() * 100)
        },
        button_label: null,
        require_movement: true,
        data: {phase: 'response'}


    },
    {
        type: 'html-slider-response',
        stimulus: '<p>In relation to the previous clip, how do you feel?</p>'+
                  '<p><strong>Warm and tender</strong></p>',
        labels: ['Barely at all', 'Strongest Imaginable'],
        min: 0,
        max: 100,
        step: 1,
        start: function(){
            return Math.floor(Math.random() * 100)
        },
        button_label: null,
        require_movement: true,
        data: {phase: 'response'}


    },
    {
        type: 'html-slider-response',
        stimulus: '<p>In relation to the previous clip, how do you feel?</p>'+
                  '<p><strong>Engaged</strong></p>',
        labels: ['Barely at all', 'Strongest Imaginable'],
        min: 0,
        max: 100,
        step: 1,
        start: function(){
            return Math.floor(Math.random() * 100)
        },
        button_label: null,
        require_movement: true,
        data: {phase: 'response'}


    }
]
};

timeline.push(practice_trial);

var final_instruction = {
    type: 'html-keyboard-response',
    stimulus: '<h1>INSTRUCTIONS</h1>'+
              '<p>Nice job! You hve completed the practice trial'+
              'and are now ready for the experiment. Please get comfy, and ready to pay attention.</p>'+
              '<p>Please press the space bar to continue to the experiment.</p>',
    choices:' '
};

timeline.push(final_instruction)

var spacetop = {
    timeline:[
        {
            type: 'html-keyboard-response',
            stimulus: '<p style="font-size:60px>+</p>',
            choices: jsPsych.NO_KEYS,
            trial_duration:1000,
        },
        {
            type: 'video-keyboard-response',
            sources: function(){
                trial_stim=[];
                var vid = jsPsych.randomization.sampleWithoutReplacement(video, 1);
                vid_stim.push(vid);
                trial_stim.push(vid)
                return vid},
            trial_ends_after_video: true,
            choices: jsPsych.NO_KEYS,
            autoplay:true,
            width: 900,
            height:900,
            data: {
                video: function(){
                    var string = trial_stim[0]
                    return string
                },
                phase: 'response'
            }      
        },
        {
            type: 'html-slider-response',
            stimulus: '<p>In relation to the previous clip, how do you feel?</p>'+
                      '<p><strong>Personal relevance</strong></p>',
            labels: ['Barely at all', 'Strongest Imaginable'],
            start: function(){
                return Math.floor(Math.random() * 100)
            },
            min: 0,
            max: 100,
            step: 1,
            require_movement: true,
            data: {phase: 'response'}


        },
        {
            type: 'html-slider-response',
            stimulus: '<p>In relation to the previous clip, how do you feel?</p>'+
                      '<p><strong>Happy</strong></p>',
            labels: ['Barely at all', 'Strongest Imaginable'],
            min: 0,
            max: 100,
            step: 1,
            start: function(){
                return Math.floor(Math.random() * 100)
            },
            require_movement: true,
            data: {phase: 'response'}


        },
        {
            type: 'html-slider-response',
            stimulus: '<p>In relation to the previous clip, how do you feel?</p>'+
                      '<p><strong>Sad</strong></p>',
            labels: ['Barely at all', 'Strongest Imaginable'],
            min: 0,
            max: 100,
            step: 1,
            start: function(){
                return Math.floor(Math.random() * 100)
            },
            button_label: null,
            require_movement: true,
            data: {phase: 'response'}


        },
        {
            type: 'html-slider-response',
            stimulus: '<p>In relation to the previous clip, how do you feel?</p>'+
                      '<p><strong>Afraid</strong></p>',
            labels: ['Barely at all', 'Strongest Imaginable'],
            min: 0,
            max: 100,
            step: 1,
            start: function(){
                return Math.floor(Math.random() * 100)
            },
            button_label: null,
            require_movement: true,
            data: {phase: 'response'}


        },
        {
            type: 'html-slider-response',
            stimulus: '<p>In relation to the previous clip, how do you feel?</p>'+
                      '<p><strong>Disgusted</strong></p>',
            labels: ['Barely at all', 'Strongest Imaginable'],
            min: 0,
            max: 100,
            step: 1,
            start: function(){
                return Math.floor(Math.random() * 100)
            },
            button_label: null,
            require_movement: true,
            data: {phase: 'response'}


        },
        {
            type: 'html-slider-response',
            stimulus: '<p>In relation to the previous clip, how do you feel?</p>'+
                      '<p><strong>Warm and tender</strong></p>',
            labels: ['Barely at all', 'Strongest Imaginable'],
            min: 0,
            max: 100,
            step: 1,
            start: function(){
                return Math.floor(Math.random() * 100)
            },
            button_label: null,
            require_movement: true,
            data: {phase: 'response'}


        },
        {
            type: 'html-slider-response',
            stimulus: '<p>In relation to the previous clip, how do you feel?</p>'+
                      '<p><strong>Engaged</strong></p>',
            labels: ['Barely at all', 'Strongest Imaginable'],
            min: 0,
            max: 100,
            step: 1,
            start: function(){
                return Math.floor(Math.random() * 100)
            },
            button_label: null,
            require_movement: true,
            data: {phase: 'response'}

        }
    ]
}

var spacetop_sequence = {
    timeline: [spacetop],
    repetitions: 14
    }

timeline.push(spacetop_sequence)

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



