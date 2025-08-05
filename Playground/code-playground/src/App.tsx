import { useState, useRef, useEffect, useCallback } from 'react'
import { Editor } from '@monaco-editor/react'
import * as monaco from 'monaco-editor'
import './App.css'

type EditorWindow = {
  id: string
  title: string
  code: string
  language: string
}

type LogType = 'log' | 'warn' | 'error' | 'info' | 'table';

interface LogEntry {
  id: string | number;
  type: LogType;
  message?: string;
  color?: string;
  tableData?: string[][];
}

function App() {
  const editorRef = useRef<monaco.editor.IStandaloneCodeEditor | null>(null)

  const [theme, setTheme] = useState<'vs-dark' | 'light'>('vs-dark')
  const [windows, setWindows] = useState(() => {
    const saved = localStorage.getItem('editorWindows')
    return saved ? JSON.parse(saved) : []
  })
  const [logs, setLogs] = useState<LogEntry[]>([])
  const [activeId, setActiveId] = useState<string>('')

  useEffect(() => {
    const saved = localStorage.getItem('editorWindows')
    if (saved) {
      const parsed = JSON.parse(saved)
      setWindows(parsed)
      if (parsed.length) setActiveId(parsed[0].id)
    } else {
      handleCreateWindow()
    }
  }, [])

  useEffect(() => {
    localStorage.setItem('editorWindows', JSON.stringify(windows))
  }, [windows])

  const activeWindow = windows.find(w => w.id === activeId)

  const handleEditorDidMount = (editor: monaco.editor.IStandaloneCodeEditor) => {
    editorRef.current = editor
  }

const handleRunClick = useCallback(() => {
  const code = activeWindow?.code ?? ''
  const collected: { id: number; message: string; color: string; type?: string; tableData?: string[][] }[] = []

  const originalLog = console.log
  const originalWarn = console.warn
  const originalInfo = console.info
  const originalError = console.error

  console.log = (...args) => {
    const message = args.map(arg =>
      typeof arg === 'object' ? JSON.stringify(arg, null, 2) : String(arg)
    ).join(' ')
    collected.push({ id: Date.now() + Math.random(), message, color: 'black', type: 'log' })
  }

  console.warn = (...args) => {
    const message = args.join(' ')
    collected.push({ id: Date.now() + Math.random(), message, color: 'orange', type: 'warn' })
  }

  console.info = (...args) => {
    const message = args.join(' ')
    collected.push({ id: Date.now() + Math.random(), message, color: 'blue', type: 'info' })
  }

  console.error = (...args) => {
    const message = args.join(' ')
    collected.push({ id: Date.now() + Math.random(), message, color: 'red', type: 'error' })
  }

  console.table = (data: any) => {
    const rows: string[][] = []

    if (Array.isArray(data)) {
      const keys = Object.keys(data[0] || {})
      rows.push(keys) // header
      data.forEach(item => {
        rows.push(keys.map(k => String(item[k])))
      })
    } else if (typeof data === 'object') {
      rows.push(['Key', 'Value'])
      for (const [key, value] of Object.entries(data)) {
        rows.push([key, String(value)])
      }
    }

    collected.push({
      id: Date.now() + Math.random(),
      message: 'Table Output',
      color: 'black',
      type: 'table',
      tableData: rows
    })
  }

  try {
    new Function(code)()
  } catch (error: unknown) {
    if (error instanceof Error) {
      collected.push({
        id: Date.now(),
        message: `Error: ${error.message}\n${error.stack}`,
        color: 'red',
        type: 'error'
      })
    } else {
      collected.push({
        id: Date.now(),
        message: 'Unknown error',
        color: 'red',
        type: 'error'
      })
    }
  }

  // Restore originals
  console.log = originalLog
  console.warn = originalWarn
  console.info = originalInfo
  console.error = originalError

  setLogs(collected)
}, [activeWindow])


  const handleCodeChange = (value: string | undefined) => {
    if (!activeWindow) return
    setWindows(windows.map(w =>
      w.id === activeId ? { ...w, code: value ?? '' } : w
    ))
  }

  const handleCreateWindow = () => {
    const id = Date.now().toString()
    const newWin: EditorWindow = {
      id,
      title: `Window ${windows.length + 1}`,
      code: '// Welcome Shubham',
      language: 'javascript'
    }
    setWindows([newWin, ...windows])
    setActiveId(id)
  }

  const handleDeleteWindow = (id: string) => {
    const filtered = windows.filter((window: EditorWindow) => window.id !== id)
    setWindows(filtered)

    if (id === activeId) {
      setActiveId(filtered.length > 0 ? filtered[0].id : '')
    }
  }

  const handleLanguageChange = (lang: string) => {
    if (!activeWindow) return
    setWindows(windows.map(w =>
      w.id === activeId ? { ...w, language: lang } : w
    ))
  }

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key === 's') {
        e.preventDefault()
        handleRunClick()
      }
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [handleRunClick, activeWindow])

  const toggleTheme = () => {
    setTheme(prev => (prev === 'vs-dark' ? 'light' : 'vs-dark'))
  }



  return (
    <div className="container">
      <div className="sidebar">
        <button onClick={handleCreateWindow}>+ New Window</button>
        {windows.map(win => (
          <div
            key={win.id}
            className={`note-tab ${win.id === activeId ? 'active' : ''}`}
          >
            <span onClick={() => setActiveId(win.id)}>{win.title}</span>
            <button
              className="delete-btn"
              onClick={() => handleDeleteWindow(win.id)}
              title="Delete window"
            >
              ❌
            </button>
          </div>
        ))}
      </div>

      <div className="editor-pane">
        <div className="toolbar">
          <label>
            Language:&nbsp;
            <select
              className="lang-select"
              value={activeWindow?.language}
              onChange={(e) => handleLanguageChange(e.target.value)}
            >
              <option value="javascript">JavaScript</option>
              <option value="typescript">TypeScript</option>
            </select>
          </label>

          <button className="theme-button" onClick={toggleTheme}>
            {theme === 'vs-dark' ? '🌞 Light' : '🌙 Dark'}
          </button>

          <button className="run-button" onClick={handleRunClick}>
            Run ▶
            <p >CTRL + S</p>
          </button>
        </div>

        {activeWindow && (
          <Editor
            height="100%"
            theme={theme}
            language={activeWindow.language}
            value={activeWindow.code}
            onMount={handleEditorDidMount}
            onChange={handleCodeChange}
            
            options={{
              fontSize: 16,
              minimap: { enabled: false },
              lineNumbers: 'on',
              automaticLayout: true,
              wordWrap: 'on',
              cursorBlinking: 'smooth',
            }}
          />
        )}
      </div>

      <div className="output-pane">
  <h3>Console Output:</h3>

  {logs.map((log) => (
    <div key={log.id} style={{ marginBottom: '12px', color: log.color ?? 'inherit' }}>
      {log.type === 'table' && log.tableData ? (
        <table
          style={{
            borderCollapse: 'collapse',
            width: '100%',
            fontSize: '14px',
            marginTop: '8px',
          }}
        >
          <thead>
            <tr>
              {log.tableData[0]?.map((header, i) => (
                <th
                  key={i}
                  style={{
                    border: '1px solid #ccc',
                    background: '#f0f0f0',
                    fontWeight: 'bold',
                  }}
                >
                  {header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {log.tableData.slice(1).map((row, rowIndex) => (
              <tr key={rowIndex}>
                {row.map((cell, cellIndex) => (
                  <td
                    key={cellIndex}
                    style={{ border: '1px solid #ccc',textAlign: 'center'}}
                  >
                    {cell}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <div>
          <strong>[{log.type.toUpperCase()}]</strong> {log.message}
        </div>
      )}
    </div>
  ))}
</div>
    </div>
  )
}

export default App