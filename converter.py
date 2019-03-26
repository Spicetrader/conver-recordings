from os import path
from pydub import AudioSegment

src
dst

sound = AudioSegment.from_mp3(src)
sound.export(dst, format="mp3", bitrate="16k")