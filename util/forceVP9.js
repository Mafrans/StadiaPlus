// based on https://www.reddit.com/r/Stadia/comments/eiyfhg/trick_to_increase_stream_quality_on_chrome_force/

const getOption = key =>
  new Promise((resolve, reject) =>
    chrome.storage.sync.get(key, result =>
      chrome.runtime.lastError
        ? reject(Error(chrome.runtime.lastError.message))
        : resolve(result)
    )
  )

const { forceVP9 } = await getOption('forceVP9')

if (forceVP9) {
  localStorage.setItem("video_codec_implementation_by_codec_key", '{"vp9":"ExternalDecoder"}')
}
